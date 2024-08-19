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
exports.DbConnectionsEntity = void 0;
const typeorm_1 = require("typeorm");
const instanciasUniversaEntity_1 = require("./instanciasUniversaEntity");
let DbConnectionsEntity = class DbConnectionsEntity {
};
exports.DbConnectionsEntity = DbConnectionsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], DbConnectionsEntity.prototype, "conect_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], DbConnectionsEntity.prototype, "inst_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, unique: true }),
    __metadata("design:type", String)
], DbConnectionsEntity.prototype, "conect_nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], DbConnectionsEntity.prototype, "conect_host", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], DbConnectionsEntity.prototype, "conect_port", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], DbConnectionsEntity.prototype, "conect_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], DbConnectionsEntity.prototype, "conect_password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], DbConnectionsEntity.prototype, "conect__database_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['Ativo', 'Inativo'], default: 'Inativo' }),
    __metadata("design:type", String)
], DbConnectionsEntity.prototype, "conect_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['Producao', 'Homologacao', 'Replica'], default: 'Producao' }),
    __metadata("design:type", String)
], DbConnectionsEntity.prototype, "conect_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => instanciasUniversaEntity_1.InstanciasUniversaEntity, instancia => instancia.conexoes, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'inst_id' }),
    __metadata("design:type", instanciasUniversaEntity_1.InstanciasUniversaEntity)
], DbConnectionsEntity.prototype, "instancia", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], DbConnectionsEntity.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], DbConnectionsEntity.prototype, "ceated_At", void 0);
exports.DbConnectionsEntity = DbConnectionsEntity = __decorate([
    (0, typeorm_1.Entity)('db_connections')
], DbConnectionsEntity);
//exemplo de um OneToOne:
/* @OneToOne(() => InstanciasUniversaEntity, (inst_id) => inst_id.conet_id)
@JoinColumn({ name: 'inst_id' })
inst_id?: InstanciasUniversaEntity */ 
