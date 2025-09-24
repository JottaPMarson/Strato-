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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatoriosController = void 0;
const common_1 = require("@nestjs/common");
let RelatoriosController = class RelatoriosController {
    list() {
        return {
            items: [
                { id: 'r1', name: 'Relatório Financeiro - Junho', createdAt: '2025-06-30' },
                { id: 'r2', name: 'Relatório Financeiro - Julho', createdAt: '2025-07-31' }
            ]
        };
    }
    export(body) {
        const formato = body?.formato ?? 'pdf';
        return { status: 'ok', formato, url: `https://example.com/export/demo.${formato}` };
    }
};
exports.RelatoriosController = RelatoriosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RelatoriosController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('export'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RelatoriosController.prototype, "export", null);
exports.RelatoriosController = RelatoriosController = __decorate([
    (0, common_1.Controller)('relatorios')
], RelatoriosController);
