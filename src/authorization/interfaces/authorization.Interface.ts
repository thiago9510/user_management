

export interface dataTokenInterface {
    sub?: string
    modulos?: []
    iat?: number
    exp?: number

}

export interface AuthorizationResultInterface {
    success: boolean,
    message?: string,   // Mensagem opcional para informações adicionais
    data?: any,  // Dados da pessoa criada, caso tenha sucesso
    error?: string | Error  // Mensagem de erro opcional
    code?: any
    token?: string
}


export type SingleTokenProperty<T> = { // tipo que serve para receber apenas uma propriedade do tipo definido
    [K in keyof T]: Pick<T, K>
}[keyof T]
