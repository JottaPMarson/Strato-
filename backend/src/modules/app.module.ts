import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AnalisesModule } from './analises/analises.module';
import { DiagnosticosModule } from './diagnosticos/diagnosticos.module';
import { SimuladorModule } from './simulador/simulador.module';
import { RelatoriosModule } from './relatorios/relatorios.module';
import { ClassificacaoModule } from './classificacao/classificacao.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { ExtratosModule } from './extratos/extratos.module';

@Module({
  imports: [
    HealthModule,
    AuthModule,
    DashboardModule,
    AnalisesModule,
    DiagnosticosModule,
    SimuladorModule,
    RelatoriosModule,
    ClassificacaoModule,
    ConfiguracoesModule,
    ExtratosModule
  ]
})
export class AppModule {}


