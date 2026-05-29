#Requires -Version 5.1
<#
.SYNOPSIS
    Build and deploy the XMod Pro v4 (VuePress 1) docs to production via WinSCP.
.DESCRIPTION
    Builds the VuePress site and mirrors .vuepress/dist to the production
    /help/xmodpro/v4/ folder using WinSCP `synchronize -delete`. Connection
    details come from deploy/deploy.config.ps1 (gitignored). The password is read
    from $env:XMP_DOCS_FTP_PASSWORD or prompted (never stored on disk).
.PARAMETER SkipBuild
    Deploy the existing .vuepress/dist without rebuilding.
.PARAMETER DryRun
    Preview the synchronize (WinSCP -preview); apply nothing.
.PARAMETER Verify
    After deploy, run HTTP checks against the live URLs.
.PARAMETER ConfigPath
    Override the connection config path (used for testing).
#>
[CmdletBinding()]
param(
    [switch]$SkipBuild,
    [switch]$DryRun,
    [switch]$Verify,
    [string]$ConfigPath
)

$ErrorActionPreference = 'Stop'
$ScriptDir = $PSScriptRoot
$RepoRoot  = Split-Path $ScriptDir -Parent

# This script deploys ONLY the v4 version folder. The v5 repo has its own copy.
$ExpectedVersionSegment = 'v4'
$DistSubPath = '.vuepress\dist'

#region Helpers

function Get-DeployConfig {
    param([string]$Path)
    if (-not $Path) { $Path = Join-Path $ScriptDir 'deploy.config.ps1' }
    if (-not (Test-Path $Path)) {
        throw "Missing deploy config: $Path`nCopy deploy.config.example.ps1 to deploy.config.ps1 and fill in your values."
    }
    $cfg = & $Path
    foreach ($key in 'Protocol','HostName','UserName','RemoteVersionPath') {
        if (-not $cfg.$key) { throw "deploy.config.ps1 is missing required key: $key" }
    }
    if ($cfg.Protocol -notin 'sftp','ftp','ftps') {
        throw "Protocol must be one of sftp, ftp, ftps (was: $($cfg.Protocol))"
    }
    if ($cfg.Protocol -eq 'sftp' -and -not $cfg.SshHostKeyFingerprint) {
        throw "Protocol 'sftp' requires SshHostKeyFingerprint in deploy.config.ps1."
    }
    return $cfg
}

function Assert-SafeRemotePath {
    param([string]$RemotePath, [string]$Segment)
    if ($RemotePath -notmatch "/$Segment/$") {
        throw "SAFETY: RemoteVersionPath must end in '/$Segment/' (was: '$RemotePath'). Refusing to mirror-delete against an unexpected path."
    }
}

function Find-WinScp {
    if ($env:XMP_WINSCP -and (Test-Path $env:XMP_WINSCP)) { return $env:XMP_WINSCP }
    $cmd = Get-Command winscp.com -ErrorAction SilentlyContinue
    if ($cmd) { return $cmd.Source }
    foreach ($c in @(
        'C:\Program Files (x86)\WinSCP\WinSCP.com',
        'C:\Program Files\WinSCP\WinSCP.com',
        (Join-Path $env:LOCALAPPDATA 'Programs\WinSCP\WinSCP.com'))) {
        if (Test-Path $c) { return $c }
    }
    throw "WinSCP.com not found. Install with:  winget install WinSCP`nOr set `$env:XMP_WINSCP to the full path of WinSCP.com."
}

function Get-FtpPassword {
    if ($env:XMP_DOCS_FTP_PASSWORD) { return $env:XMP_DOCS_FTP_PASSWORD }
    $secure = Read-Host -Prompt 'FTP/SFTP password' -AsSecureString
    $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
    try { return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr) }
    finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr) }
}

function New-WinScpOpenCommand {
    param($Cfg, [string]$Password)
    $u = [Uri]::EscapeDataString($Cfg.UserName)
    $p = [Uri]::EscapeDataString($Password)
    $h = $Cfg.HostName
    switch ($Cfg.Protocol) {
        'sftp' { return "open sftp://${u}:${p}@${h}/ -hostkey=`"$($Cfg.SshHostKeyFingerprint)`"" }
        'ftp'  { return "open ftp://${u}:${p}@${h}/" }
        'ftps' { return "open ftpes://${u}:${p}@${h}/" }  # explicit TLS
    }
}

function Invoke-WinScp {
    param([string]$WinScp, [string[]]$Commands)
    $winArgs = @('/ini=nul', '/command') + $Commands
    & $WinScp @winArgs
    if ($LASTEXITCODE -ne 0) { throw "WinSCP exited with code $LASTEXITCODE" }
}

function Build-Site {
    Write-Host 'Building site (npm run docs:build)...' -ForegroundColor Cyan
    Push-Location $RepoRoot
    try {
        & npm run docs:build
        if ($LASTEXITCODE -ne 0) { throw "npm run docs:build failed (exit $LASTEXITCODE)" }
    } finally { Pop-Location }
}

function Get-HttpResult {
    param([string]$Url)
    $req = [System.Net.HttpWebRequest]::Create($Url)
    $req.AllowAutoRedirect = $false
    $req.Method = 'HEAD'
    $req.Timeout = 15000
    try { $resp = $req.GetResponse() }
    catch [System.Net.WebException] {
        if (-not $_.Exception.Response) { throw }
        $resp = $_.Exception.Response
    }
    $result = [PSCustomObject]@{
        Status   = [int]$resp.StatusCode
        Location = $resp.Headers['Location']
    }
    $resp.Close()
    return $result
}

function Test-Deployment {
    $ok = $true
    $root = Get-HttpResult 'https://dnndev.com/help/xmodpro/'
    if ($root.Status -in 301,302 -and $root.Location -match '/help/xmodpro/v5/') {
        Write-Host "  [PASS] root -> $($root.Status) $($root.Location)" -ForegroundColor Green
    } else {
        Write-Host "  [FAIL] root -> $($root.Status) $($root.Location)" -ForegroundColor Red; $ok = $false
    }
    foreach ($v in 'v5','v4') {
        $r = Get-HttpResult "https://dnndev.com/help/xmodpro/$v/"
        if ($r.Status -eq 200) { Write-Host "  [PASS] /$v/ -> 200" -ForegroundColor Green }
        else { Write-Host "  [FAIL] /$v/ -> $($r.Status)" -ForegroundColor Red; $ok = $false }
    }
    if (-not $ok) { throw 'Verification failed.' }
}

#endregion

# --- Main ---
$cfg = Get-DeployConfig -Path $ConfigPath

Assert-SafeRemotePath -RemotePath $cfg.RemoteVersionPath -Segment $ExpectedVersionSegment

if (-not $SkipBuild) { Build-Site }

$localDist = Join-Path $RepoRoot $DistSubPath
if (-not (Test-Path $localDist)) {
    throw "Build output not found: $localDist  (run without -SkipBuild, or build first)."
}

$winscp = Find-WinScp
$pw   = Get-FtpPassword
$open = New-WinScpOpenCommand -Cfg $cfg -Password $pw
$syncSwitches = if ($DryRun) { '-preview -delete' } else { '-delete' }
$sync = "synchronize remote $syncSwitches `"$localDist`" `"$($cfg.RemoteVersionPath)`""

$mode = if ($DryRun) { 'DRY RUN (preview only)' } else { 'DEPLOY' }
Write-Host "${mode}: $localDist  ->  $($cfg.RemoteVersionPath)" -ForegroundColor Cyan
Invoke-WinScp -WinScp $winscp -Commands @('option batch abort','option confirm off',$open,$sync,'exit')
Write-Host 'Done.' -ForegroundColor Green

if ($Verify) { Test-Deployment }
