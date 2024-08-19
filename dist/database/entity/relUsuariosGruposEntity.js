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
exports.RelUsuariosGruposEntity = void 0;
const typeorm_1 = require("typeorm");
const gruposUsuariosEntity_1 = require("./gruposUsuariosEntity");
const usuariosEntity_1 = require("./usuariosEntity");
let RelUsuariosGruposEntity = class RelUsuariosGruposEntity {
};
exports.RelUsuariosGruposEntity = RelUsuariosGruposEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RelUsuariosGruposEntity.prototype, "rel_usuario_grupo_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gruposUsuariosEntity_1.gruposusuariosEntity, grupo => grupo.relGrupoUsuarios, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'grupo_id' }),
    __metadata("design:type", gruposUsuariosEntity_1.gruposusuariosEntity)
], RelUsuariosGruposEntity.prototype, "relGrupo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuariosEntity_1.UsuarioEntity, usuario => usuario.relUsuario, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuariosEntity_1.UsuarioEntity)
], RelUsuariosGruposEntity.prototype, "relUsuario", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], RelUsuariosGruposEntity.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], RelUsuariosGruposEntity.prototype, "ceated_At", void 0);
exports.RelUsuariosGruposEntity = RelUsuariosGruposEntity = __decorate([
    (0, typeorm_1.Entity)('rel__usuarios_grupos')
], RelUsuariosGruposEntity);
