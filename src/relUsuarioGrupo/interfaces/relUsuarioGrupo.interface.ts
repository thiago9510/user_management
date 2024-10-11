import { gruposusuariosEntity } from "../../database/entity/gruposUsuariosEntity"
import { UsuarioEntity } from "../../database/entity/usuariosEntity"

export interface RelUserGrupInterface {
    rel_usuario_grupo_id?: number
    grupo_id: Partial<gruposusuariosEntity> //teste partial<entidade>
    usuario_id: Partial<UsuarioEntity>
    updated_At?: Date
    created_At?: Date
}

export interface QueryFailedRelUserGrupError {
    name: string,
    message: string,
    data?: string,
    error?: string | Error   // Mensagem de erro opcional 
}

export interface RelUserGrupResultInterface{
    success: boolean,
    message?: string,   // Mensagem opcional para informações adicionais
    data?: any,  // Dados da pessoa criada, caso tenha sucesso
    error?: string | Error  // Mensagem de erro opcional
    code?: any
}

export type SingleRelUserGrupProperty<T> = { // tipo que serve para receber apenas uma propriedade do tipo definido
    [K in keyof T]: Pick<T, K>
}[keyof T]
