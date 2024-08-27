import { PessoaEntity } from "../../database/entity/pessoasEntity";

export interface QueryFailedPessoaError {
    name: string,
    message: string,
    data?: string,
    error?: string | Error   // Mensagem de erro opcional 
}

export interface PessoaResultInterface{
    success: boolean,
    message?: string,   // Mensagem opcional para informações adicionais
    data?: any,  // Dados da pessoa criada, caso tenha sucesso
    error?: string | Error  // Mensagem de erro opcional
}

export type SinglePessoaProperty<T> = { // tipo que serve para receber apenas uma propriedade do tipo definido
    [K in keyof T]: Pick<T, K>
}[keyof T]
