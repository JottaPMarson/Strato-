import { Controller, Get, Query } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get('kpis')
  getKpis(@Query('period') period?: 'mes' | 'trimestre' | 'semestre' | 'ano') {
    // Valores base (mês)
    let revenue = 125000.5;
    let cashFlow = 42000.75;
    let roi = 0.18;

    // Variações simples por período para fins de demonstração
    let multiplier = 1
    switch (period) {
      case 'trimestre':
        revenue *= 3.1;
        cashFlow *= 3.0;
        roi = 0.21;
        multiplier = 3
        break;
      case 'semestre':
        revenue *= 6.2;
        cashFlow *= 6.0;
        roi = 0.24;
        multiplier = 6
        break;
      case 'ano':
        revenue *= 12.4;
        cashFlow *= 12.0;
        roi = 0.27;
        multiplier = 12
        break;
      default:
        // mes
        break;
    }

    // Métricas derivadas coerentes
    const customersActive = 128; // exemplo simples
    const orders = customersActive * multiplier; // 1 compra por cliente/mês
    const avgTicket = orders > 0 ? revenue / orders : revenue;
    const leads = 500 * multiplier; // tráfego/lead por mês
    const conversionRate = leads > 0 ? customersActive / leads : 0; // ~25.6%

    return {
      revenue: Number(revenue.toFixed(2)),
      roi: Number(roi.toFixed(2)),
      cashFlow: Number(cashFlow.toFixed(2)),
      alerts: 3,
      customersActive,
      avgTicket: Number(avgTicket.toFixed(2)),
      conversionRate: Number(conversionRate.toFixed(4)),
      period: {
        from: '2025-08-01',
        to: '2025-09-01',
      },
    };
  }

  // Estatísticas fixas do mês anterior (não dependem do filtro rápido)
  @Get('stats-month')
  getMonthStats() {
    const customersActive = 128;
    const leads = 500; // leads no mês anterior
    const conversionRate = 0.248; // 24.8%
    const orders = Math.round(leads * conversionRate);
    const avgTicket = 1250; // R$ 1.250,00 por pedido
    const revenueMonth = orders * avgTicket; // coerente com ticket e conversão
    const paymentAvgDays = 18;

    return {
      customersActive,
      leads,
      conversionRate,
      orders,
      avgTicket,
      revenueMonth,
      paymentAvgDays,
      reference: 'mes_anterior',
    };
  }

  // Distribuição de receitas (mês corrente e dois anteriores) alinhada com setembro
  @Get('distribuicao')
  getDistribuicao() {
    // meses relativos a setembro
    const meses = ['Jul', 'Ago', 'Set'];
    return {
      items: [
        { name: meses[0], vendas: 30000, servicos: 20000, assinaturas: 7000 },
        { name: meses[1], vendas: 33000, servicos: 21000, assinaturas: 8000 },
        { name: meses[2], vendas: 36000, servicos: 22000, assinaturas: 9000 },
      ],
    };
  }

  // Tendência de saldo: último saldo observado + projeção 3 meses a frente a partir de setembro
  @Get('saldo-trend')
  getSaldoTrend() {
    const meses = ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return {
      items: [
        { name: meses[0], saldo: 18000, projecao: null },
        { name: meses[1], saldo: 22000, projecao: null },
        { name: meses[2], saldo: 25000, projecao: null },
        { name: meses[3], saldo: null, projecao: 27000 },
        { name: meses[4], saldo: null, projecao: 29500 },
        { name: meses[5], saldo: null, projecao: 32000 },
      ],
    };
  }
}


