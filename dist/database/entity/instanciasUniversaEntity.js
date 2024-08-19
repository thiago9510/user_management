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
exports.InstanciasUniversaEntity = void 0;
const typeorm_1 = require("typeorm");
const dbConnections_1 = require("./dbConnections");
let InstanciasUniversaEntity = class InstanciasUniversaEntity {
};
exports.InstanciasUniversaEntity = InstanciasUniversaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], InstanciasUniversaEntity.prototype, "inst_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, unique: true }),
    __metadata("design:type", String)
], InstanciasUniversaEntity.prototype, "inst_nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, unique: true }),
    __metadata("design:type", String)
], InstanciasUniversaEntity.prototype, "inst_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['Ead', 'Presencial', 'Ambigua'], default: 'Ambigua' }),
    __metadata("design:type", String)
], InstanciasUniversaEntity.prototype, "inst_modalidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['Producao', 'MEC', 'Homologacao'], default: 'Producao' }),
    __metadata("design:type", String)
], InstanciasUniversaEntity.prototype, "inst_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['Ativo', 'Inativo'], default: 'Inativo' }),
    __metadata("design:type", String)
], InstanciasUniversaEntity.prototype, "inst_status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dbConnections_1.DbConnectionsEntity, dbConnection => dbConnection.instancia),
    __metadata("design:type", Array)
], InstanciasUniversaEntity.prototype, "conexoes", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], InstanciasUniversaEntity.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], InstanciasUniversaEntity.prototype, "ceated_At", void 0);
exports.InstanciasUniversaEntity = InstanciasUniversaEntity = __decorate([
    (0, typeorm_1.Entity)('instancias_universa')
], InstanciasUniversaEntity);
