import { BodyValidatorDefinition } from "../../dataValidation/interfaces/generalValidationInterface";

export const usuarioSchemas: { [key: string]: BodyValidatorDefinition } = {
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
}