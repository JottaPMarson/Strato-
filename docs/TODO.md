# 📋 TODO – Itens Pendentes (Strato PJ)

Este documento lista, de forma objetiva, o que ainda precisa ser feito após as melhorias aplicadas hoje.

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

## 📊 Status Atual (Setembro 2025)
✅ **Concluído hoje:**
- KPIs dinâmicos (Receita, Fluxo de Caixa, ROI) respondem aos filtros rápidos
- Estatísticas independentes (Clientes Ativos, Ticket Médio, etc.) fixas no mês anterior
- Gráficos atualizados com dados de Jul/Ago/Set e projeções Out/Nov/Dez
- Calendário com datas atuais (30/09, 05/10, 15/10)
- Documentação técnica completa em `/docs`

🔄 **Em andamento:**
- Ações Recomendadas e Insights Inteligentes (marcados como "a fazer")

---

*Última atualização: Janeiro 2025*
