#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR=$(cd "$(dirname "$0")" && pwd)
LOG_DIR="$ROOT_DIR/.logs"
mkdir -p "$LOG_DIR"

command -v node >/dev/null 2>&1 || { echo "[ERR] Node.js não encontrado"; exit 1; }

if command -v pnpm >/dev/null 2>&1; then
  PM="pnpm"
  RUN_BACKEND() { (cd "$ROOT_DIR/backend" && pnpm install && pnpm dev); }
  RUN_FRONTEND() { (cd "$ROOT_DIR" && pnpm install && pnpm dev); }
else
  PM="npm"
  RUN_BACKEND() { (cd "$ROOT_DIR/backend" && npm install --no-fund --no-audit && npm run dev); }
  RUN_FRONTEND() { (cd "$ROOT_DIR" && npm install --no-fund --no-audit && npm run dev); }
fi

echo "[INFO] Usando package manager: $PM"

BACK_PID=""
FRONT_PID=""

cleanup() {
  echo "\n[INFO] Encerrando processos..."
  if [ -n "$FRONT_PID" ] && ps -p "$FRONT_PID" >/dev/null 2>&1; then kill "$FRONT_PID" || true; fi
  if [ -n "$BACK_PID" ] && ps -p "$BACK_PID" >/dev/null 2>&1; then kill "$BACK_PID" || true; fi
}
trap cleanup EXIT INT TERM

echo "[INFO] Iniciando backend... (logs: $LOG_DIR/backend.log)"
(
  RUN_BACKEND
) >"$LOG_DIR/backend.log" 2>&1 &
BACK_PID=$!

echo -n "[INFO] Aguardando backend em http://localhost:4000/api/health "
for i in $(seq 1 60); do
  if curl -fsS http://localhost:4000/api/health >/dev/null 2>&1; then echo "OK"; break; fi
  echo -n "."; sleep 1
done

echo "[INFO] Iniciando frontend... (logs: $LOG_DIR/frontend.log)"
(
  RUN_FRONTEND
) >"$LOG_DIR/frontend.log" 2>&1 &
FRONT_PID=$!

echo "[INFO] Backend PID: $BACK_PID | Frontend PID: $FRONT_PID"
echo "[INFO] Frontend: http://localhost:3000 | Backend: http://localhost:4000"
echo "[INFO] Pressione Ctrl+C para encerrar."

wait $FRONT_PID

