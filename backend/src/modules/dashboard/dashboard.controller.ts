import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get('kpis')
  getKpis() {
    return {
      revenue: 125000.5,
      roi: 0.18,
      cashFlow: 42000.75,
      alerts: 3,
      period: {
        from: '2025-08-01',
        to: '2025-09-01'
      }
    };
  }
}


