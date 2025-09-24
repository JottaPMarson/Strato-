import { Module } from '@nestjs/common';
import { ClassificacaoController } from './classificacao.controller';

@Module({
  controllers: [ClassificacaoController]
})
export class ClassificacaoModule {}


