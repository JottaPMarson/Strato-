const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

async function request<T>(path: string, method: HttpMethod, body?: unknown, init?: RequestInit): Promise<T> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : undefined;
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined,
    ...init
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => 'Request failed');
    throw new Error(msg || `HTTP ${res.status}`);
  }
  return (await res.json()) as T;
}

export const api = {
  login: (email: string, password: string) => request<{ token?: string; user?: { email: string }; error?: string }>(
    '/auth/login',
    'POST',
    { email, password }
  ),
  getDistribuicao: () => request<{ items: Array<{ name: string; vendas: number; servicos: number; assinaturas: number }> }>(
    '/dashboard/distribuicao',
    'GET'
  ),
  getSaldoTrend: () => request<{ items: Array<{ name: string; saldo: number | null; projecao: number | null }> }>(
    '/dashboard/saldo-trend',
    'GET'
  ),
  getMonthStats: () =>
    request<{
      customersActive: number
      leads: number
      conversionRate: number
      orders: number
      avgTicket: number
      revenueMonth: number
      paymentAvgDays: number
      reference: string
    }>(
      '/dashboard/stats-month',
      'GET'
    ),
  getDashboardKpis: (period?: 'mes' | 'trimestre' | 'semestre' | 'ano') =>
    request<{ revenue: number; cashFlow: number; roi: number; alerts: number; customersActive: number; avgTicket: number; conversionRate: number; period: { from: string; to: string } }>(
      `/dashboard/kpis${period ? `?period=${period}` : ''}`,
      'GET'
    ),
  // Análises
  getAnaliseRedeMetrics: () => request<{ nodes: number; edges: number; density: number; avgDegree: number; clusteringCoeff: number }>(
    '/analises/rede/metrics',
    'GET'
  ),
  getAnaliseRedeGraph: () => request<{ nodes: Array<{ id: string; label: string; group: string; value?: number }>; edges: Array<{ source: string; target: string; weight?: number }> }>(
    '/analises/rede/graph',
    'GET'
  ),
  getAnalisesTendencias: () => request<{ series: Array<{ name: string; points: Array<{ t: string; v: number }> }> }>(
    '/analises/tendencias',
    'GET'
  ),
  getAnalisesComparativa: () => request<{ setor: string; indicadores: Array<{ nome: string; empresa: number; mediaSetor: number }> }>(
    '/analises/comparativa',
    'GET'
  ),
  getDiagnosticosHistorico: () => request<{ items: Array<{ id: string; date: string; score: number; recomendacoes: number }> }>(
    '/diagnosticos/historico',
    'GET'
  ),
  // Simulador
  runSimulador: (params: { investimento: number; receita: number; custo: number }) =>
    request<{ investimento: number; receita: number; custo: number; lucro: number; roi: number }>(
      '/simulador/run',
      'POST',
      params
    ),
  // Relatórios
  listRelatorios: () => request<{ items: Array<{ id: string; name: string; createdAt: string }> }>(
    '/relatorios',
    'GET'
  ),
  exportRelatorio: (formato: 'pdf' | 'csv' | 'excel' | 'pptx' = 'pdf') =>
    request<{ status: 'ok'; formato: string; url: string }>(
      '/relatorios/export',
      'POST',
      { formato: formato === 'excel' ? 'csv' : formato } // backend mock aceita 'pdf' | 'csv'
    ),
  // Classificação
  getClassificacaoStatus: () => request<{ estagio: string; score: number; recomendacoes: string[] }>(
    '/classificacao/status',
    'GET'
  ),
  // Configurações
  getConfiguracoes: () => request<{ theme: 'light' | 'dark'; notifications: boolean }>(
    '/configuracoes',
    'GET'
  ),
  updateConfiguracoes: (settings: Partial<{ theme: 'light' | 'dark'; notifications: boolean }>) =>
    request<{ theme: 'light' | 'dark'; notifications: boolean }>(
      '/configuracoes',
      'PUT',
      settings
    ),
  // Upload de extratos
  async uploadExtrato(file: File): Promise<{ status: string; filename: string; size: number }> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : undefined;
    const form = new FormData();
    form.append('file', file);
    const res = await fetch(`${API_BASE}/extratos/upload`, {
      method: 'POST',
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: form
    });
    if (!res.ok) throw new Error('Upload failed');
    return res.json();
  }
};

export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}


