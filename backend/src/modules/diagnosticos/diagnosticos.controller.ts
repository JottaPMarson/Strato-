import { Controller, Get } from '@nestjs/common';

@Controller('diagnosticos')
export class DiagnosticosController {
  @Get('historico')
  getHistorico() {
    return {
      items: [
        { id: 'd1', date: '2025-06-10', score: 72, recomendacoes: 3 },
        { id: 'd2', date: '2025-07-12', score: 78, recomendacoes: 2 },
        { id: 'd3', date: '2025-08-14', score: 81, recomendacoes: 4 }
      ]
    };
  }
}


