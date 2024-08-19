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
exports.ArquivosEntity = void 0;
const typeorm_1 = require("typeorm");
const diretorioEntity_1 = require("./diretorioEntity");
// Defina a entidade para a tabela 'arquivos'
let ArquivosEntity = class ArquivosEntity {
};
exports.ArquivosEntity = ArquivosEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ArquivosEntity.prototype, "arq_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ArquivosEntity.prototype, "dir_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], ArquivosEntity.prototype, "arq_hash", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], ArquivosEntity.prototype, "arq_nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ArquivosEntity.prototype, "arq_size", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ArquivosEntity.prototype, "arq_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ArquivosEntity.prototype, "data_hora_insercao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => diretorioEntity_1.DiretorioEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'dir_id' }),
    __metadata("design:type", diretorioEntity_1.DiretorioEntity)
], ArquivosEntity.prototype, "diretorio", void 0);
exports.ArquivosEntity = ArquivosEntity = __decorate([
    (0, typeorm_1.Entity)('arquivos')
], ArquivosEntity);
