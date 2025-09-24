// Types for the Strato application

export interface KPIData {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType;
  borderColor: string;
  changeColor: string;
}

export interface DiagnosticoItem {
  titulo: string;
  descricao: string;
  prioridade: 'alta' | 'media' | 'baixa';
  icon: React.ComponentType;
  iconBgColor: string;
  iconColor: string;
}

export interface NetworkNode {
  id: string;
  label?: string;
  name?: string;
  type: string;
  value: number;
  riskScore?: number;
  centrality?: number;
  transactions?: number;
  connections?: number;
  riskLevel?: string;
  x?: number;
  y?: number;
}

export interface NetworkEdge {
  from: string;
  to: string;
  value: number;
  label: string;
  type: string;
  riskScore: number;
}

export interface NetworkData {
  nodes: NetworkNode[];
  edges?: NetworkEdge[];
  links?: any[];
}

export interface NetworkMetrics {
  centrality: {
    degree: number;
    betweenness: number;
    closeness: number;
    eigenvector: number;
  };
  cohesion: {
    density: number;
    transitivity: number;
    reciprocity: number;
  };
  modularity: {
    clusters: number;
    modularity: number;
    communities: number;
  };
  resilience: {
    robustness: number;
    vulnerability: number;
    redundancy: number;
  };
}

export interface NetworkAlert {
  id: string;
  type: string;
  severity: 'alta' | 'media' | 'baixa';
  description: string;
  entities: string[];
  timestamp: string;
}

export interface SimulacaoResultado {
  receita: number;
  despesa: number;
  investimento: number;
  taxaJuros: number;
  periodo: number;
  taxaCrescimentoReceita: number;
  taxaCrescimentoDespesa: number;
  saldoFinal: number;
  crescimentoPercentual: string;
}

export interface SimulacaoComparacao {
  saldoFinalDiferenca: number;
  crescimentoDiferenca: number;
  mesesPositivos: number;
  retornoInvestimentoTotal: number;
}

export interface CenarioSalvo {
  id: number;
  nome: string;
  descricao: string;
  receita: number;
  despesa: number;
  investimento: number;
  taxaJuros: number;
  periodo: number;
  taxaCrescimentoReceita: number;
  taxaCrescimentoDespesa: number;
  saldoFinal: number;
  crescimentoPercentual: string;
  data: string;
}

export interface ClassificacaoStatus {
  empresa: {
    nome: string;
    cnpj: string;
    setor: string;
    porte: string;
  };
  classificacao: {
    score: number;
    categoria: string;
    nivel: string;
    confiabilidade: number;
  };
  indicadores: Array<{
    nome: string;
    valor: number;
    benchmark: number;
    status: string;
  }>;
}

export interface Configuracoes {
  notificacoes: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacidade: {
    compartilharDados: boolean;
    analisesAnonimas: boolean;
  };
  preferencias: {
    tema: 'claro' | 'escuro';
    idioma: string;
    moeda: string;
  };
}

export interface TendenciaData {
  mes: string;
  entradas: number;
  saidas: number;
  saldo: number;
}

export interface ComparativaData {
  type: string;
  category: string;
  month: string;
  value: number;
}

// Chart types
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

export interface PieChartData {
  name: string;
  value: number;
  fill?: string;
}

export interface BarChartData {
  mes: string;
  entradas: number;
  saidas: number;
  [key: string]: any;
}
