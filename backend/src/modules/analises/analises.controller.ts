import { Controller, Get } from '@nestjs/common';

@Controller('analises')
export class AnalisesController {
  @Get('rede/metrics')
  getNetworkMetrics() {
    return {
      nodes: 42,
      edges: 108,
      density: 0.12,
      avgDegree: 5.1,
      clusteringCoeff: 0.38
    };
  }

  @Get('rede/graph')
  getNetworkGraph() {
    return {
      nodes: [
        { id: 'A', label: 'Fornecedor A', group: 'fornecedor', value: 10 },
        { id: 'B', label: 'Cliente B', group: 'cliente', value: 8 },
        { id: 'C', label: 'Fornecedor C', group: 'fornecedor', value: 6 }
      ],
      edges: [
        { source: 'A', target: 'B', weight: 4 },
        { source: 'B', target: 'C', weight: 2 },
        { source: 'A', target: 'C', weight: 1 }
      ]
    };
  }

  @Get('tendencias')
  getTendencias() {
    return {
      series: [
        { name: 'Receita', points: [
          { t: '2025-06', v: 100000 },
          { t: '2025-07', v: 110000 },
          { t: '2025-08', v: 118000 },
          { t: '2025-09', v: 125000 }
        ] },
        { name: 'Despesas', points: [
          { t: '2025-06', v: 70000 },
          { t: '2025-07', v: 72000 },
          { t: '2025-08', v: 75000 },
          { t: '2025-09', v: 78000 }
        ] }
      ]
    };
  }

  @Get('comparativa')
  getComparativa() {
    return {
      setor: 'Serviços',
      indicadores: [
        { nome: 'Margem', empresa: 0.22, mediaSetor: 0.18 },
        { nome: 'Ticket Médio', empresa: 450, mediaSetor: 380 },
        { nome: 'Churn', empresa: 0.06, mediaSetor: 0.08 }
      ]
    };
  }
}


