"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoasSchemas = void 0;
//objeto de validação
exports.pessoasSchemas = {
    pessoa_nome: {
        required: true,
        type: 'string',
        length: 255
    },
    pessoa_cpf: {
        required: true,
        type: 'string',
        length: 11,
        format: 'cpf'
    },
    pessoa_data_nascimento: {
        required: true,
        type: 'string',
        length: 10,
        format: 'ISO8601'
    },
    pessoa_telefone: {
        required: true,
        type: 'string',
        length: 11,
        format: 'telefone'
    },
    pessoa_email: {
        required: true,
        type: 'string',
        length: 255,
        format: 'email'
    }
};
