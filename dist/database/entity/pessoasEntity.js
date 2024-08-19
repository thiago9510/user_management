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
exports.PessoaEntity = void 0;
const typeorm_1 = require("typeorm");
let PessoaEntity = class PessoaEntity {
};
exports.PessoaEntity = PessoaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PessoaEntity.prototype, "pessoa_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], PessoaEntity.prototype, "pessoa_nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 11, nullable: false, unique: true }),
    __metadata("design:type", String)
], PessoaEntity.prototype, "pessoa_cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], PessoaEntity.prototype, "pessoa_data_nascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 16, nullable: false }),
    __metadata("design:type", String)
], PessoaEntity.prototype, "pessoa_telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, unique: true }),
    __metadata("design:type", String)
], PessoaEntity.prototype, "pessoa_email", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], PessoaEntity.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], PessoaEntity.prototype, "ceated_At", void 0);
exports.PessoaEntity = PessoaEntity = __decorate([
    (0, typeorm_1.Entity)('pessoas')
], PessoaEntity);
/*
//teste
@OneToMany(() => DbConnectionsEntity, dbConnection => dbConnection.instancia)
conexoes?: DbConnectionsEntity[];  */
