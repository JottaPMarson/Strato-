import { Module } from '@nestjs/common';
import { ExtratosController } from './extratos.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({})],
  controllers: [ExtratosController]
})
export class ExtratosModule {}


