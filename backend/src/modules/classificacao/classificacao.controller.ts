import { Controller, Get } from '@nestjs/common';

@Controller('classificacao')
export class ClassificacaoController {
  @Get('status')
  status() {
    return { estagio: 'Crescimento', score: 0.81, recomendacoes: ['Ajustar custos fixos', 'Rever precificação'] };
  }
}


