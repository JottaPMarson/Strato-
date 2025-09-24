"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const health_module_1 = require("./health/health.module");
const auth_module_1 = require("./auth/auth.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const analises_module_1 = require("./analises/analises.module");
const diagnosticos_module_1 = require("./diagnosticos/diagnosticos.module");
const simulador_module_1 = require("./simulador/simulador.module");
const relatorios_module_1 = require("./relatorios/relatorios.module");
const classificacao_module_1 = require("./classificacao/classificacao.module");
const configuracoes_module_1 = require("./configuracoes/configuracoes.module");
const extratos_module_1 = require("./extratos/extratos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            health_module_1.HealthModule,
            auth_module_1.AuthModule,
            dashboard_module_1.DashboardModule,
            analises_module_1.AnalisesModule,
            diagnosticos_module_1.DiagnosticosModule,
            simulador_module_1.SimuladorModule,
            relatorios_module_1.RelatoriosModule,
            classificacao_module_1.ClassificacaoModule,
            configuracoes_module_1.ConfiguracoesModule,
            extratos_module_1.ExtratosModule
        ]
    })
], AppModule);
