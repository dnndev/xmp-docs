# deploy.config.example.ps1  (v4 docs)
#
# Copy this file to  deploy.config.ps1  (gitignored) and fill in real values.
# deploy.config.ps1 must NEVER be committed — it identifies the production host.
#
# The PASSWORD is NOT stored here. Either set the environment variable
#   $env:XMP_DOCS_FTP_PASSWORD
# before running, or let Deploy-Docs.ps1 prompt you for it.
#
# This file is a PowerShell script that returns a hashtable.
@{
    # One of: 'sftp', 'ftp', 'ftps'   (ftps = explicit TLS / FTPES)
    Protocol = 'sftp'

    HostName = 'ftp.yourhost.example'
    UserName = 'your-ftp-user'

    # Absolute remote path to THIS version's folder. MUST end in /v4/ — the deploy
    # script refuses to run otherwise, so a wrong value can't mirror-delete the
    # wrong folder.
    RemoteVersionPath = '/httpdocs/help/xmodpro/v4/'

    # SFTP ONLY: server host-key fingerprint for TOFU pinning. Copy it from
    # WinSCP's first-connect "Verify host key" dialog. Required when Protocol='sftp'.
    # Example: 'ssh-ed25519 255 SHA256:AbC123...'
    SshHostKeyFingerprint = ''
}
