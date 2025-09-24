import { Module } from '@nestjs/common';
import { SimuladorController } from './simulador.controller';

@Module({
  controllers: [SimuladorController]
})
export class SimuladorModule {}


