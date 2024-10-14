//import { gruposusuariosEntity } from "../../database/entity/gruposUsuariosEntity"

export interface AcoesInterface {
    grupo_id?: number
    grupo_nome: string
    grupo_descricao: string
    updated_At?: Date
    ceated_At?: Date
}

export interface AcoesResultInterface{
    success: boolean,
    message?: string,   // Mensagem opcional para informações adicionais
    data?: any,  // Dados de Acoes criadas, caso tenha sucesso
    error?: string | Error  // Mensagem de erro opcional
    code?: any
}

export type SingleUserProperty<T> = { // tipo que serve para receber apenas uma propriedade do tipo definido
    [K in keyof T]: Pick<T, K>
}[keyof T]
