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
exports.AlunoCurso = void 0;
const typeorm_1 = require("typeorm");
const arquivos_1 = require("./arquivos");
// Defina a entidade para a tabela 'aluno_curso'
let AlunoCurso = class AlunoCurso {
};
exports.AlunoCurso = AlunoCurso;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AlunoCurso.prototype, "alunocurso_id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { nullable: false }),
    __metadata("design:type", Number)
], AlunoCurso.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], AlunoCurso.prototype, "nome_aluno", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], AlunoCurso.prototype, "nome_curso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => arquivos_1.ArquivosEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'arq_id' }),
    __metadata("design:type", arquivos_1.ArquivosEntity)
], AlunoCurso.prototype, "arquivo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
    __metadata("design:type", Date)
], AlunoCurso.prototype, "ceated_At", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
    __metadata("design:type", Date)
], AlunoCurso.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['Sim', 'Nao'], default: 'Nao' }),
    __metadata("design:type", String)
], AlunoCurso.prototype, "status_integracao", void 0);
exports.AlunoCurso = AlunoCurso = __decorate([
    (0, typeorm_1.Entity)('aluno_curso')
], AlunoCurso);
