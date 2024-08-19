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
exports.RelGruposAcaoEntity = void 0;
const typeorm_1 = require("typeorm");
const gruposUsuariosEntity_1 = require("./gruposUsuariosEntity");
const acoesEntity_1 = require("./acoesEntity");
//relação das acoes que os grupos podem realizar
let RelGruposAcaoEntity = class RelGruposAcaoEntity {
};
exports.RelGruposAcaoEntity = RelGruposAcaoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RelGruposAcaoEntity.prototype, "grupo_acoes_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gruposUsuariosEntity_1.gruposusuariosEntity, grupo => grupo.relGrupoUsuarios, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'grupo_id' }),
    __metadata("design:type", gruposUsuariosEntity_1.gruposusuariosEntity)
], RelGruposAcaoEntity.prototype, "relGrupo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => acoesEntity_1.AcoesEntity, acao => acao.relGrupoAcao, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'acao_id' }),
    __metadata("design:type", acoesEntity_1.AcoesEntity)
], RelGruposAcaoEntity.prototype, "relAcao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], RelGruposAcaoEntity.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], RelGruposAcaoEntity.prototype, "ceated_At", void 0);
exports.RelGruposAcaoEntity = RelGruposAcaoEntity = __decorate([
    (0, typeorm_1.Entity)('rel__grupo_acoes')
], RelGruposAcaoEntity);
