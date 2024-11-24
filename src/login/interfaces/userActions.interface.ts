

export interface UserActionsInterface {
    rel_usuario_grupo_id: number
    grupo_id: number
    usuario_id: number
}

export interface LoginResultInterface{
    success: boolean,
    message?: string,   // Mensagem opcional para informações adicionais
    data?: any,  // Dados da pessoa criada, caso tenha sucesso
    error?: string | Error  // Mensagem de erro opcional
    code?: any
    token?: string
}

export type SingleLoginProperty<T> = { // tipo que serve para receber apenas uma propriedade do tipo definido
    [K in keyof T]: Pick<T, K>
}[keyof T]
