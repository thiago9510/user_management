
export interface PessoaAddInterface {
    pessoa_id?: number
    pessoa_nome: string
    pessoa_cpf: string
    pessoa_data_nascimento: Date
    pessoa_telefone: string
    pessoa_email: string
    updated_At?: Date
    created_At?: Date
}

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
    code?: any
}

export type SinglePessoaProperty<T> = { // tipo que serve para receber apenas uma propriedade do tipo definido
    [K in keyof T]: Pick<T, K>
}[keyof T]
