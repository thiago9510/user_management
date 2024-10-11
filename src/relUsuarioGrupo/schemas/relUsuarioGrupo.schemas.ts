import { BodyValidatorDefinition } from "../../dataValidation/interfaces/generalValidationInterface";

export const RelUserGrupSchemas: { [key: string]: BodyValidatorDefinition } = {   
    grupo_id: {
        required: true,
        type: 'number',
        length: 255
    },
    usuario_id: {
        required: true,
        type: 'number',
        length: 255         
    }
}

export const RelUserGrupEditSchemas: { [key: string]: BodyValidatorDefinition } = {   
    grupo_id: {
        required: false,
        type: 'number',
        length: 255
    },
    usuario_id: {
        required: false,
        type: 'number',
        length: 255         
    }
}