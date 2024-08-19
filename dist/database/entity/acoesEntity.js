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
exports.AcoesEntity = void 0;
const typeorm_1 = require("typeorm");
const relGrupoAcoesEntity_1 = require("./relGrupoAcoesEntity");
//ações disponívels no sistema
let AcoesEntity = class AcoesEntity {
};
exports.AcoesEntity = AcoesEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], AcoesEntity.prototype, "acao_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], AcoesEntity.prototype, "acao_nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], AcoesEntity.prototype, "acao_rota", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], AcoesEntity.prototype, "modulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], AcoesEntity.prototype, "chave", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], AcoesEntity.prototype, "acao_descricao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], AcoesEntity.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date
    //estabelece o relacionamento entre as tabelas sem criar uma coluna em usuarios
    )
], AcoesEntity.prototype, "ceated_At", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => relGrupoAcoesEntity_1.RelGruposAcaoEntity, rel => rel.relAcao),
    __metadata("design:type", Array)
], AcoesEntity.prototype, "relGrupoAcao", void 0);
exports.AcoesEntity = AcoesEntity = __decorate([
    (0, typeorm_1.Entity)('acoes')
], AcoesEntity);
