"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalisesController = void 0;
const common_1 = require("@nestjs/common");
let AnalisesController = class AnalisesController {
    getNetworkMetrics() {
        return {
            nodes: 42,
            edges: 108,
            density: 0.12,
            avgDegree: 5.1,
            clusteringCoeff: 0.38
        };
    }
    getNetworkGraph() {
        return {
            nodes: [
                { id: 'A', label: 'Fornecedor A', group: 'fornecedor', value: 10 },
                { id: 'B', label: 'Cliente B', group: 'cliente', value: 8 },
                { id: 'C', label: 'Fornecedor C', group: 'fornecedor', value: 6 }
            ],
            edges: [
                { source: 'A', target: 'B', weight: 4 },
                { source: 'B', target: 'C', weight: 2 },
                { source: 'A', target: 'C', weight: 1 }
            ]
        };
    }
    getTendencias() {
        return {
            series: [
                { name: 'Receita', points: [
                        { t: '2025-06', v: 100000 },
                        { t: '2025-07', v: 110000 },
                        { t: '2025-08', v: 118000 },
                        { t: '2025-09', v: 125000 }
                    ] },
                { name: 'Despesas', points: [
                        { t: '2025-06', v: 70000 },
                        { t: '2025-07', v: 72000 },
                        { t: '2025-08', v: 75000 },
                        { t: '2025-09', v: 78000 }
                    ] }
            ]
        };
    }
    getComparativa() {
        return {
            setor: 'Serviços',
            indicadores: [
                { nome: 'Margem', empresa: 0.22, mediaSetor: 0.18 },
                { nome: 'Ticket Médio', empresa: 450, mediaSetor: 380 },
                { nome: 'Churn', empresa: 0.06, mediaSetor: 0.08 }
            ]
        };
    }
};
exports.AnalisesController = AnalisesController;
__decorate([
    (0, common_1.Get)('rede/metrics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalisesController.prototype, "getNetworkMetrics", null);
__decorate([
    (0, common_1.Get)('rede/graph'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalisesController.prototype, "getNetworkGraph", null);
__decorate([
    (0, common_1.Get)('tendencias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalisesController.prototype, "getTendencias", null);
__decorate([
    (0, common_1.Get)('comparativa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalisesController.prototype, "getComparativa", null);
exports.AnalisesController = AnalisesController = __decorate([
    (0, common_1.Controller)('analises')
], AnalisesController);
