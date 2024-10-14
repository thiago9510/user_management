import { AcoesEntity } from "../../database/entity/acoesEntity"
import { gruposusuariosEntity } from "../../database/entity/gruposUsuariosEntity"


export interface RelGruposAcaoInterface {
    grupo_acoes_id?: number
    relGrupo: Partial<gruposusuariosEntity> //teste partial<entidade>
    relAcao: Partial<AcoesEntity>
    updated_At?: Date
    created_At?: Date
}

export interface QueryFailedRelGruposAcaoError {
    name: string,
    message: string,
    data?: string,
    error?: string | Error   // Mensagem de erro opcional 
}

export interface RelGruposAcaoResultInterface{
    success: boolean,
    message?: string,   // Mensagem opcional para informações adicionais
    data?: any,  // Dados da pessoa criada, caso tenha sucesso
    error?: string | Error  // Mensagem de erro opcional
    code?: any
}

export type SingleRelGruposAcaoProperty<T> = { // tipo que serve para receber apenas uma propriedade do tipo definido
    [K in keyof T]: Pick<T, K>
}[keyof T]
