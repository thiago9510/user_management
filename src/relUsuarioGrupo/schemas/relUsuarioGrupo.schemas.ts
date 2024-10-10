import { BodyValidatorDefinition } from "../../dataValidation/interfaces/generalValidationInterface";

export const RelUserGrupSchemas: { [key: string]: BodyValidatorDefinition } = {
    rel_usuario_grupo_id: {
        required: true,
        type: 'number',
        length: 255
    },
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
    usuario_login: {
        required: false,
        type: 'number',
        length: 255
    },
    usuario_password: {
        required: false,
        type: 'number',
        length: 255
    },
    usuario_status: {
        required: false,
        type: 'number',
        length: 255       
    }
 
}