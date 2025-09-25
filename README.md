## 📊 StratoPJ — Sistema de Diagnóstico Financeiro

### Sobre o Projeto
O StratoPJ é uma aplicação full‑stack (Next.js + NestJS) criada para diagnóstico e análise financeira, com recursos de visualização, simulação de cenários e relatórios. A arquitetura é modular e documentada em `docs/` com diagramas Mermaid e guias de desenvolvimento, deploy e API.

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, Recharts
- **Backend**: NestJS (Node.js 22 LTS), módulos por domínio, CORS/Helmet, prefixo `api`
- **Documentação**: `docs/` com arquitetura, API, desenvolvimento e deploy

---

## 🚀 Como Executar (Dev)

### Pré‑requisitos
- Node.js 22.x LTS
- npm (ou pnpm)

### Passos rápidos
1) Instalar dependências
```bash
# Frontend
npm install --legacy-peer-deps

# Backend
cd backend && npm install && cd ..
```

2) Subir os serviços (terminals separados)
```bash
# Frontend (porta 3000)
npm run dev

# Backend (porta 4000)
npm run dev:backend
```

3) Acessos
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:4000/api`

### Variáveis de ambiente
Crie `.env.local` na raiz (frontend) e configure o backend conforme necessário:
```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_APP_NAME=StratoPJ
NEXT_PUBLIC_VERSION=1.0.0

# Backend (backend/.env)
PORT=4000
NODE_ENV=development
API_PREFIX=api
CORS_ORIGIN=http://localhost:3000
```

### Scripts úteis
```json
{
  "scripts": {
    "dev": "next dev",                    
    "dev:backend": "pnpm --dir backend dev",
    "build": "next build",               
    "build:backend": "pnpm --dir backend build",
    "start": "next start",               
    "start:backend": "pnpm --dir backend start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 🔌 API (Visão Rápida)
A documentação completa está em `docs/api/endpoints.md`. O backend usa prefixo global `api` (ver `backend/src/main.ts`).

- Health checks
```http
GET /api/health
GET /api/ready
```

- Autenticação (exemplo)
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@stratopj.com",
  "password": "123456"
}
```

- Análises, Simulador, Relatórios, Upload: ver `docs/api/endpoints.md` e `docs/api/schemas.md`.

Credenciais demo:
- Email: `admin@stratopj.com`
- Senha: `123456`

---

## 🏗️ Arquitetura (resumo)
- Visão geral: `docs/architecture/overview.md`
- Frontend: `docs/architecture/frontend.md`
- Backend: `docs/architecture/backend.md`
- Fluxo de dados: `docs/architecture/data-flow.md`

### Estrutura do repositório
```text
strato/
├─ app/                      # Next.js (App Router)
│  ├─ (auth)/                # Login, layout de auth
│  └─ (dashboard)/           # Dashboard e módulos (analises, simulador, etc.)
├─ backend/                  # NestJS API (src/modules/*, main.ts)
├─ components/               # Componentes React (shadcn/ui e específicos)
├─ docs/                     # Documentação técnica (arquitetura, API, deploy, dev)
├─ lib/                      # Utilitários frontend (api.ts, utils.ts)
├─ types/                    # Tipos globais TS
├─ public/                   # Assets estáticos
└─ scripts/                  # Scripts auxiliares
```

Principais características técnicas:
- CORS/Helmet, validação de entrada, rate‑limit (ver guia de deploy)
- Métricas/health endpoints para observabilidade básica
- Visualizações com Recharts e componentes shadcn/ui

---

## 📦 Build e Deploy
Guia completo em `docs/deployment/setup.md` (Dockerfiles, docker‑compose, Nginx, AWS ECS/EC2, CI/CD com GitHub Actions).

Passos básicos locais de produção:
```bash
# Frontend
npm run build && npm run start

# Backend
cd backend && npm run build && npm run start:prod
```

---

## 💻 Desenvolvimento
- Guia do desenvolvedor: `docs/development/getting-started.md`
- Padrões de código, testes e ferramentas: `docs/README.md`

Dicas rápidas de troubleshooting:
```bash
# Reinstalar dependências (frontend)
rm -rf node_modules package-lock.json && npm install --legacy-peer-deps

# Backend não inicia
cd backend && npm install && npm run dev:backend

# Verificar health da API
curl http://localhost:4000/api/health
```

---

## 🔒 Segurança e Boas Práticas
- Headers de segurança (Helmet) e CORS restrito por ambiente
- Inputs validados (backend) e sanitização no frontend
- Nunca expor secrets no frontend; usar variáveis de ambiente e secret managers em produção

---

## 📚 Referências Rápidas
- Documentação geral: `docs/README.md`
- API (endpoints e schemas): `docs/api/endpoints.md`, `docs/api/schemas.md`
- Arquitetura (Mermaid): `docs/architecture/`
- Deploy: `docs/deployment/setup.md`
- Desenvolvimento: `docs/development/getting-started.md`
