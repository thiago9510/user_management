import { BodyValidatorDefinition } from "../../dataValidation/interfaces/generalValidationInterface"

//objeto de validação
export const pessoasSchemas: { [key: string]: BodyValidatorDefinition } = {
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
}

export const pessoasEditSchemas: { [key: string]: BodyValidatorDefinition } = {
    pessoa_nome: {
        required: false,
        type: 'string',
        length: 255
    },
    pessoa_cpf: {
        required: false,
        type: 'string',
        length: 11,
        format: 'cpf'
    },
    pessoa_data_nascimento: {
        required: false,
        type: 'string',
        length: 10,
        format: 'ISO8601'
    },
    pessoa_telefone: {
        required: false,
        type: 'string',
        length: 11,
        format: 'telefone'

    },
    pessoa_email: {
        required: false,
        type: 'string',
        length: 255,
        format: 'email'
    }
}