import { Body, Controller, Post } from '@nestjs/common';

@Controller('simulador')
export class SimuladorController {
  @Post('run')
  run(@Body() body: { investimento?: number; custo?: number; receita?: number }) {
    const investimento = body?.investimento ?? 10000;
    const receita = body?.receita ?? 15000;
    const custo = body?.custo ?? 5000;
    const lucro = receita - custo - investimento * 0.02;
    const roi = lucro / Math.max(investimento, 1);
    return { investimento, receita, custo, lucro, roi };
  }
}


