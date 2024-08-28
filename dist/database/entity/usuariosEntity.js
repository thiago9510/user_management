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
exports.UsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
const pessoasEntity_1 = require("./pessoasEntity");
const relUsuariosGruposEntity_1 = require("./relUsuariosGruposEntity");
let UsuarioEntity = class UsuarioEntity {
};
exports.UsuarioEntity = UsuarioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, unique: true }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "usuario_login", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "usuario_password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], UsuarioEntity.prototype, "usuario_ultimoAcesso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['Ativo', 'Inativo'], default: 'Inativo' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "usuario_status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pessoasEntity_1.PessoaEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'pessoa_id' }),
    __metadata("design:type", pessoasEntity_1.PessoaEntity)
], UsuarioEntity.prototype, "pessoa_id", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], UsuarioEntity.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date
    //estabelece o relacionamento entre as tabelas sem criar uma coluna nesta tabela
    )
], UsuarioEntity.prototype, "ceated_At", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => relUsuariosGruposEntity_1.RelUsuariosGruposEntity, rel => rel.relUsuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "relUsuario", void 0);
exports.UsuarioEntity = UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], UsuarioEntity);
