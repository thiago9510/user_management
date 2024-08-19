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
exports.DiretorioEntity = void 0;
const typeorm_1 = require("typeorm");
// Defina a entidade para a tabela 'diretorio'
let DiretorioEntity = class DiretorioEntity {
};
exports.DiretorioEntity = DiretorioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], DiretorioEntity.prototype, "dir_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DiretorioEntity.prototype, "dir_nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DiretorioEntity.prototype, "dir_local", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['publico', 'privado'], default: 'publico' }),
    __metadata("design:type", String)
], DiretorioEntity.prototype, "dir_tipo", void 0);
exports.DiretorioEntity = DiretorioEntity = __decorate([
    (0, typeorm_1.Entity)('diretorio')
], DiretorioEntity);
