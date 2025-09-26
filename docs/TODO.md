# 📋 TODO – Itens Pendentes (Strato PJ)

Este documento lista, de forma objetiva, o que ainda precisa ser feito para tornar o projeto **production-ready**. 
Baseado na análise técnica completa realizada em Janeiro 2025.

---

## 🔴 **CRÍTICO** – Qualidade e Testes (Prioridade Máxima)
- [ ] **Configurar ESLint + Prettier + Commitlint**
  - Instalar e configurar linting automático
  - Remover `ignoreBuildErrors: true` e `ignoreDuringBuilds: true` do next.config.mjs
  - Configurar pre-commit hooks com Husky
- [ ] **Implementar testes unitários básicos**
  - Backend: controllers e services principais
  - Frontend: componentes críticos (Dashboard, Login)
  - Meta: ≥80% cobertura em código novo
- [ ] **TypeScript strict mode**
  - Configurar `strict: true` e resolver erros de tipagem
  - Remover `any` genéricos e melhorar tipagem
- [ ] **Validação de entrada no backend**
  - Implementar class-validator + class-transformer
  - Validar todos os DTOs de entrada
  - Sanitizar inputs para prevenir injeções

## 🟠 **ALTO** – Segurança e Production-Ready (2ª Prioridade)
- [ ] **Autenticação e autorização real**
  - Implementar JWT + refresh tokens
  - Sistema de usuários e permissões
  - Middleware de autorização por rota
- [ ] **Logs estruturados e observabilidade**
  - Winston com formato JSON estruturado
  - Correlation ID em todas as requisições
  - Níveis apropriados (error, warn, info, debug)
- [ ] **Segurança avançada**
  - CORS restritivo por ambiente (remover `origin: true`)
  - Rate limiting implementado (express-rate-limit)
  - Headers de segurança (Helmet configurado adequadamente)
  - Validação de HTTPS obrigatório em produção
- [ ] **Health checks adequados**
  - `/api/health` (liveness check)
  - `/api/ready` (readiness check com dependências)
  - Métricas básicas de sistema

## 🟡 **MÉDIO** – Deploy e CI/CD (3ª Prioridade)
- [ ] **Pipeline CI/CD básico**
  - GitHub Actions com quality gates
  - Lint → Test → Build → Deploy automatizado
  - Validação de PR obrigatória
- [ ] **Containerização**
  - Dockerfile para frontend e backend
  - docker-compose.yml para desenvolvimento
  - Otimização de imagens Docker
- [ ] **Configuração por ambiente**
  - .env templates (.env.example)
  - Configuração development/staging/production
  - Secrets management strategy
- [ ] **Estratégia de backup e rollback**
  - Versionamento de deploys
  - Rollback automático em caso de falha
  - Backup de configurações

## 🔵 **BAIXO** – Testes E2E e Monitoramento (4ª Prioridade)
- [ ] **Testes E2E com Playwright**
  - Smoke tests: Login → Dashboard → KPIs
  - Testes de regressão visual
  - Integração com pipeline CI/CD
- [ ] **Monitoramento e métricas**
  - Endpoint `/metrics` para Prometheus (opcional)
  - Dashboards básicos de observabilidade
  - Alertas para erros críticos

---

## 1) Dashboard – Itens a Fazer
- [ ] **Ações Recomendadas dinâmicas** (data-driven)
  - Basear recomendações em variações de `revenue`, `cashFlow`, `roi` e crescimento/despesa do período
  - Estratégia: heurísticas simples (limiares) + explicações de por que a ação foi sugerida
  - Endpoint sugerido: `GET /api/dashboard/recommendations`
- [ ] **Insights Inteligentes dinâmicos** (data-driven)
  - Gerar cards de insights a partir de KPIs e tendências (ex.: margem, variação de conversão, churn, LTV/CAC se disponível)
  - Endpoint sugerido: `GET /api/dashboard/insights`
- [ ] **Calendário com datas futuras reais**
  - Criar endpoint que gere eventos relativos à data atual (ex.: fechamento mensal = último dia útil; reuniões mock + pagamentos)
  - Endpoint sugerido: `GET /api/dashboard/calendar?from=YYYY-MM-DD&limit=5`
- [ ] **Consolidar documentação dos novos endpoints criados**
  - `GET /api/dashboard/kpis?period=` (mes|trimestre|semestre|ano)
  - `GET /api/dashboard/stats-month` (estatísticas do mês anterior)
  - `GET /api/dashboard/distribuicao` (barras Jul/Ago/Set)
  - `GET /api/dashboard/saldo-trend` (saldo atual + projeções Out/Nov/Dez)

## 2) API/Backend – Melhorias
- [ ] **Implementar `GET /api/dashboard/calendar`** (datas relativas ao "hoje")
- [ ] **Implementar `GET /api/dashboard/recommendations` e `GET /api/dashboard/insights`**
  - Estruturar respostas com `title`, `description`, `priority`/`severity`, `why` (explicação) e `metricRef`
- [ ] **Testes unitários e de contrato** para os endpoints acima
- [ ] **Padronizar Problem Details** para erros (RFC 7807) e atualizar docs

## 3) Frontend – Integração e UX
- [ ] **Conectar Ações/Insights ao backend** (carregamento, estados vazios, erros)
- [ ] **Tornar KPIs e Indicadores acessíveis** (aria-labels, tooltips com contexto)
- [ ] **Revisar responsividade** dos novos gráficos (breakpoints pequenos)
- [ ] **Loading states consistentes** por card (skeleton/spinner)

## 4) Documentação
- [ ] **Atualizar `docs/api/endpoints.md`** com endpoints novos e exemplos
- [ ] **Adicionar breve "Design Rationale"** para KPIs/indicadores (como são calculados)
- [ ] **Adicionar "Release Notes"** resumindo o alinhamento de setembro

## 5) Qualidade e Observabilidade
- [ ] **Métrica de latência** por endpoint (`/metrics` com Prometheus, se aplicável)
- [ ] **Logs estruturados** nos novos handlers (correlationId)
- [ ] **Esboço de testes E2E** de smoke para o dashboard (login → KPIs → gráficos)

## 6) Escopo Futuro (Opcional)
- [ ] **Parametrizar projeção de saldo** por modelo (pessimista/base/otimista)
- [ ] **Persistência leve** (cache em disco/mem) para simular histórico
- [ ] **Exportação CSV/PDF** consolidando KPIs + gráficos do mês

---

---

## ⏱️ **Estimativas de Tempo por Prioridade**

### **Crítico (1-2 semanas)**
- ESLint/Prettier: 1-2 dias
- Testes unitários básicos: 3-5 dias
- TypeScript strict: 2-3 dias
- Validação backend: 2-3 dias

### **Alto (2-3 semanas)**
- Autenticação real: 5-7 dias
- Logs estruturados: 2-3 dias
- Segurança avançada: 3-4 dias
- Health checks: 1-2 dias

### **Médio (1-2 semanas)**
- CI/CD pipeline: 3-4 dias
- Dockerização: 2-3 dias
- Configuração ambiente: 1-2 dias
- Backup/rollback: 2-3 dias

---

## 📊 Status Atual do Projeto (Janeiro 2025)

### ✅ **Concluído e Funcionando:**
- ✅ Arquitetura sólida (Next.js + NestJS)
- ✅ Dashboard com KPIs dinâmicos funcionais
- ✅ Sistema de módulos bem estruturado
- ✅ API REST completa e documentada
- ✅ Interface moderna (shadcn/ui + Tailwind)
- ✅ Documentação técnica em `/docs`
- ✅ Responsividade e tema claro/escuro

### 🟡 **Funcional mas Precisa Melhoria:**
- 🟡 Segurança básica (Helmet + CORS muito permissivo)
- 🟡 Configuração por ambiente (parcial)
- 🟡 Estrutura de dados (hardcoded, mas funcional)

### 🔴 **Ausente - Crítico para Produção:**
- ❌ Testes automatizados (0% cobertura)
- ❌ Linting e formatação automática
- ❌ TypeScript strict mode
- ❌ Validação de entrada
- ❌ Logs estruturados
- ❌ Autenticação real
- ❌ Pipeline CI/CD
- ❌ Containerização

---

## 🎯 **Próximos Steps Recomendados (Esta Semana)**

```bash
# 1. Configuração básica de qualidade
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D prettier eslint-config-prettier
npm install -D husky lint-staged

# 2. Testes unitários
npm install -D jest @types/jest ts-jest
npm install -D @testing-library/react @testing-library/jest-dom

# 3. Validação backend
cd backend && npm install class-validator class-transformer

# 4. Logs estruturados
cd backend && npm install winston
```

---

## 📈 **Avaliação Geral**
- **Estado atual**: 6/10 (MVP funcional, não production-ready)
- **Tempo para produção**: 4-6 semanas com foco em qualidade
- **Arquitetura**: 9/10 (excelente base)
- **Funcionalidade**: 8/10 (features principais funcionam)
- **Qualidade**: 3/10 (ausência crítica de testes e validações)
- **Segurança**: 4/10 (básica implementada, mas insuficiente)

---

*Última atualização: Janeiro 2025 - Análise Técnica Completa*
