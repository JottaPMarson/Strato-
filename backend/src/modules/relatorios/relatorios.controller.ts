import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('relatorios')
export class RelatoriosController {
  @Get()
  list() {
    return {
      items: [
        { id: 'r1', name: 'Relatório Financeiro - Junho', createdAt: '2025-06-30' },
        { id: 'r2', name: 'Relatório Financeiro - Julho', createdAt: '2025-07-31' }
      ]
    };
  }

  @Post('export')
  export(@Body() body: { formato?: 'pdf' | 'csv' }) {
    const formato = body?.formato ?? 'pdf';
    return { status: 'ok', formato, url: `https://example.com/export/demo.${formato}` };
  }
}


