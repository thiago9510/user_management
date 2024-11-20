import { BodyValidatorDefinition } from "../interfaces/generalValidationInterface";

/**
 * Classe criada para validar o corpo da requisição (body).
 * Recebe um objeto de definição de validação.
*/
export class BodyValidator {
    private definitions: { [key: string]: BodyValidatorDefinition }

    /**
     * Construtor para inicializar as definições de validação.
     * 
     * @param definitions - Objeto contendo as definições de validação para os parâmetros do body.
     */

    constructor(definitions: { [key: string]: BodyValidatorDefinition }) {
        this.definitions = definitions;
    }

    /**
     * Método para validar o body da requisição.
     * 
     * @param parameters - Objeto contendo o body da requisição.
     * @returns - Objeto com o resultado da validação.
     */
    validate(parameters: any) {
        //valida parametro não definidos no escopo do objeto
        for (let elbody of Object.keys(this.definitions)) {
            if (parameters[elbody] === undefined) {
                if (this.definitions[elbody].required == true) {
                    return {
                        sucess: false,
                        message: `Parametro Obrigatório: ${elbody}`
                    }
                }
            }
        }

        for (let el of Object.keys(parameters)) {
            const definition = this.definitions[el]
            const value = parameters[el]

            if (!definition) {
                return {
                    success: false,
                    message: `Parâmetro inválido: ${el}`
                }
            } else if (definition.enum && !definition.enum.includes(value)) {
                return {
                    success: false,
                    message: `Valor inválido para ${el}: ${value}. Valores aceitos: ${definition.enum.join(', ')}`
                }
            } else if (typeof value !== definition.type) {
                return {
                    success: false,
                    message: `Tipo de valor inválido para o parâmetro ${el}: ${typeof value}. Tipo esperado: ${definition.type}`
                }
            } else if (definition.length < value.length || 1 > value.length) {
                return {
                    success: false,
                    message: `Tamanho inválido para o parâmetro ${el}. Tamanho máximo: ${definition.length}`
                }

            } else if (definition.format) {
                if (definition.format === 'ISO8601') {
                    const iso8601Regex = /^\d{4}-\d{2}-\d{2}$/
                    if (!iso8601Regex.test(value)) {
                        return {
                            success: false,
                            message: `Valor do parametro: ${el} Inválido. Formato esperado: YYYY-MM-DD. Data recebida: ${value}`
                        }
                    }
                } else if (definition.format === 'telefone' || definition.format === 'cpf') {
                    const numberRegex = /^\d+$/
                    if (!numberRegex.test(value)) {
                        return {
                            success: false,
                            message: `valor do parametro: ${el} Inválido. Formato esperado: números sem caracteres especiais. valore recebido: ${value}`
                        }
                    }
                } else if (definition.format === 'email') {
                    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    if (!emailRegex.test(value)) {
                        return {
                            success: false,
                            message: `Email do parâmetro: ${el} inválido. Formato esperado: usuário@dominio.com.br. Email recebido: ${value}`
                        }
                    }
                }

                else {
                    return {
                        success: false,
                        message: `Formato do parametro: ${el} Inválido. Forma esperado: ${definition.format}`
                    }
                }
            }
        }
        return {
            success: true,
            parameters
        }
    }
}


/**
 * Classe criada para validar o corpo da requisição (body).
 * Recebe um objeto de definição de validação.
 */
export class ObjectRecursiveValidator {
    private definitions: { [key: string]: BodyValidatorDefinition };

    /**
     * Construtor para inicializar as definições de validação.
     * 
     * @param definitions - Objeto contendo as definições de validação para os parâmetros do body.
     */
    constructor(definitions: { [key: string]: BodyValidatorDefinition }) {
        this.definitions = definitions;
    }

    /**
     * Método recursivo para validar o body da requisição.
     * 
     * @param parameters - Objeto contendo o body da requisição.
     * @param definitions - Objeto contendo as definições de validação.
     * @returns - Objeto com o resultado da validação.
     */
    private validateObject(parameters: any, definitions: { [key: string]: BodyValidatorDefinition }): { success: boolean; message?: string; parameters?: any } {
        for (let key of Object.keys(definitions)) {
            const definition = definitions[key];
            const value = parameters[key];

            if (value === undefined) {
                return {
                    success: false,
                    message: `Parâmetro obrigatório: ${key}`
                };
            } else if (definition.enum && !definition.enum.includes(value)) {
                return {
                    success: false,
                    message: `Valor inválido para ${key}: ${value}. Valores aceitos: ${definition.enum.join(', ')}`
                };
            } else if (definition.type === 'array' && !Array.isArray(value)) {
                return {
                    success: false,
                    message: `Tipo de valor inválido para o parâmetro ${key}: ${typeof value}. Tipo esperado: ${definition.type}`
                };
            } else if (definition.type !== 'array' && typeof value !== definition.type) {
                return {
                    success: false,
                    message: `Tipo de valor inválido para o parâmetro ${key}: ${typeof value}. Tipo esperado: ${definition.type}`
                };
            } else if (typeof value === 'object' && !Array.isArray(value) && definition.type === 'object') {
                const nestedResult = this.validateObject(value, definition.properties || {});
                if (!nestedResult.success) {
                    return nestedResult;
                }
            }
        }
        return {
            success: true,
            parameters
        };
    }

    /**
     * Método para validar o body da requisição.
     * 
     * @param parameters - Objeto contendo o body da requisição.
     * @returns - Objeto com o resultado da validação.
     */
    validate(parameters: any): { success: boolean; message?: string; parameters?: any } {
        return this.validateObject(parameters, this.definitions);
    }
}