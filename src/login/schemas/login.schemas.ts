import { BodyValidatorDefinition } from "../../dataValidation/interfaces/generalValidationInterface";

export const loginSchema: { [key: string]: BodyValidatorDefinition} = {
    usuario_login: {
        required: true,
        type: 'string',
        length: 255
    },
    usuario_password: {
        required: true,
        type: 'string',
        length: 255
    }
}