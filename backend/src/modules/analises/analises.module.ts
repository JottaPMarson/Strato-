import { Module } from '@nestjs/common';
import { AnalisesController } from './analises.controller';

@Module({
  controllers: [AnalisesController]
})
export class AnalisesModule {}


