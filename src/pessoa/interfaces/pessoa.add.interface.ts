import { PessoaEntity } from "../../database/entity/pessoasEntity"

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

