"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayParameterValidation = void 0;
/**
 * Classe criada para validar parametros enviados.
 * Recebe um array de parametros para validação.
*/
class ArrayParameterValidation {
    /**
    * Construtor para inicializar as definições de validação.
    * @param arr - array contendo as os parametros Válidos.
    */
    constructor(arr) {
        this.arr = arr;
    }
    /**
     * Método para comparar os parametros enviados na consulta.
     *
     * @param data - dado enviado para validar.
     * @returns - Objeto com o resultado da validação.
     */
    check(data) {
        const arrParameters = Object.keys(data);
        const parameter = arrParameters[0];
        if (arrParameters.length > 1) { //||               
            return {
                success: false,
                message: 'Quantidade de parametros Inválidos',
                error: 'ArrayParameterValidation-error'
            };
        }
        else if (arrParameters.length === 0) {
            return {
                success: true,
                message: 'parametro Válido'
            };
        }
        else if (!this.arr.includes(parameter)) {
            console.log(arrParameters);
            return {
                success: false,
                message: 'parametro inválido',
                error: 'ArrayParameterValidation-error'
            };
        }
        return {
            success: true,
            message: 'parametro Válido'
        };
    }
}
exports.ArrayParameterValidation = ArrayParameterValidation;
