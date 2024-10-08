import { BodyValidatorDefinition } from "../../dataValidation/interfaces/generalValidationInterface";

export const grupoUsuarioSchemas: { [key: string]: BodyValidatorDefinition } = {
    grupo_nome: {
        required: true,
        type: 'string',
        length: 255
    },
    grupo_descricao: {
        required: true,
        type: 'string',
        length: 255
    }
}

export const grupoUsuarioEditSchemas: { [key: string]: BodyValidatorDefinition } = {
    grupo_nome: {
        required: false,
        type: 'string',
        length: 255
    },
    grupo_descricao: {
        required: false,
        type: 'string',
        length: 255
    }
}