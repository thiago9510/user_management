import { BodyValidatorDefinition } from "../../dataValidation/interfaces/generalValidationInterface";

export const AcoesSchemas: { [key: string]: BodyValidatorDefinition } = {
    acao_nome: {
        required: true,
        type: 'string',
        length: 255
    },
    acao_rota: {
        required: true,
        type: 'string',
        length: 255
    },
    modulo: {
        required: true,
        type: 'string',
        length: 255
    },
    chave: {
        required: true,
        type: 'string',
        length: 255
    },
    acao_descricao: {
        required: true,
        type: 'string',
        length: 255
    }
}

export const  AcoesEditSchemas: { [key: string]: BodyValidatorDefinition } = {
    acao_nome: {
        required: false,
        type: 'string',
        length: 255
    },
    acao_rota: {
        required: false,
        type: 'string',
        length: 255
    },
    modulo: {
        required: false,
        type: 'string',
        length: 255
    },
    chave: {
        required: false,
        type: 'string',
        length: 255
    },
    acao_descricao: {
        required: false,
        type: 'string',
        length: 255
    }
}