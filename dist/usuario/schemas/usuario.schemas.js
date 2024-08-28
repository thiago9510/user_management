"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioSchemas = void 0;
exports.usuarioSchemas = {
    usuario_login: {
        required: true,
        type: 'string',
        length: 255
    },
    usuario_password: {
        required: true,
        type: 'string',
        length: 255
    },
    usuario_status: {
        required: true,
        type: 'string',
        length: 255,
        enum: ['Ativo', 'Inativo']
    },
    pessoa_id: {
        required: true,
        type: 'number',
        length: 255
    }
};
