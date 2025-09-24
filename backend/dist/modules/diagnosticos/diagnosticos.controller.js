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
exports.DiagnosticosController = void 0;
const common_1 = require("@nestjs/common");
let DiagnosticosController = class DiagnosticosController {
    getHistorico() {
        return {
            items: [
                { id: 'd1', date: '2025-06-10', score: 72, recomendacoes: 3 },
                { id: 'd2', date: '2025-07-12', score: 78, recomendacoes: 2 },
                { id: 'd3', date: '2025-08-14', score: 81, recomendacoes: 4 }
            ]
        };
    }
};
exports.DiagnosticosController = DiagnosticosController;
__decorate([
    (0, common_1.Get)('historico'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiagnosticosController.prototype, "getHistorico", null);
exports.DiagnosticosController = DiagnosticosController = __decorate([
    (0, common_1.Controller)('diagnosticos')
], DiagnosticosController);
