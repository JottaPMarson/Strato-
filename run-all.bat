@echo off
setlocal ENABLEDELAYEDEXPANSION

set ROOT_DIR=%~dp0
set LOG_DIR=%ROOT_DIR%\.logs
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

where node >nul 2>nul || (
  echo [ERR] Node.js nao encontrado & exit /b 1
)

where pnpm >nul 2>nul
if %ERRORLEVEL%==0 (
  set PM=pnpm
  call :run "backend" "pnpm install && pnpm dev" "backend.log" BACK_PID
  call :waitHealth
  call :run "." "pnpm install && pnpm dev" "frontend.log" FRONT_PID
) else (
  set PM=npm
  call :run "backend" "npm install --no-fund --no-audit && npm run dev" "backend.log" BACK_PID
  call :waitHealth
  call :run "." "npm install --no-fund --no-audit && npm run dev" "frontend.log" FRONT_PID
)

echo [INFO] Backend PID: %BACK_PID% ^| Frontend PID: %FRONT_PID%
echo [INFO] Frontend: http://localhost:3000 ^| Backend: http://localhost:4000
echo [INFO] Pressione Ctrl+C para encerrar.

:: Aguarda frontend encerrar
waitfor /t 9999999 dummy 2>nul
exit /b 0

:run
set REL_DIR=%~1
set CMD=%~2
set LOG=%~3
set PIDVAR=%~4
pushd "%ROOT_DIR%\%REL_DIR%"
start "STRATO %REL_DIR%" cmd /c "%CMD%" 1>"%LOG_DIR%\%LOG%" 2>&1
for /f "tokens=2" %%a in ('tasklist /v ^| findstr /I "STRATO %REL_DIR%"') do set %PIDVAR%=%%a
popd
exit /b 0

:waitHealth
for /l %%i in (1,1,60) do (
  powershell -Command "try { iwr -UseBasicParsing http://localhost:4000/api/health ^| out-null; exit 0 } catch { exit 1 }"
  if !ERRORLEVEL!==0 goto :eof
  timeout /t 1 >nul
)
exit /b 0

