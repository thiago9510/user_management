import { BodyValidatorDefinition } from "../../dataValidation/interfaces/generalValidationInterface";

export const RelGrupoAcaoSchemas: { [key: string]: BodyValidatorDefinition } = {   
    grupo_id: {
        required: true,
        type: 'number',
        length: 255         
    },
    acao_id: {
        required: true,
        type: 'number',
        length: 255         
    }
}

export const RelGrupoAcaoEditSchemas: { [key: string]: BodyValidatorDefinition } = {   
    grupo_acoes_id: {
        required: false,
        type: 'number',
        length: 255
    },
    grupo_id: {
        required: false,
        type: 'number',
        length: 255         
    },
    acao_id: {
        required: false,
        type: 'number',
        length: 255         
    }
}