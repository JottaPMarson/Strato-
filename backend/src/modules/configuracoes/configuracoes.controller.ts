import { Body, Controller, Get, Put } from '@nestjs/common';

let settings = { theme: 'light', notifications: true };

@Controller('configuracoes')
export class ConfiguracoesController {
  @Get()
  get() {
    return settings;
  }

  @Put()
  put(@Body() body: { theme?: 'light' | 'dark'; notifications?: boolean }) {
    settings = { ...settings, ...body };
    return settings;
  }
}


