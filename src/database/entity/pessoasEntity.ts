import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { UsuarioEntity } from "./usuariosEntity"

@Entity('pessoas')
export class PessoaEntity {

    @PrimaryGeneratedColumn({type:'bigint', unsigned: true})
    pessoa_id?: number

    @Column({type: 'varchar', length: 255, nullable: false})
    pessoa_nome?: string

    @Column ({type: 'varchar', length: 11, nullable: false, unique: true})
    pessoa_cpf?: string

    @Column ({type: 'date', nullable: false})
    pessoa_data_nascimento?: Date

    @Column ({type: 'varchar', length: 16,  nullable: false})
    pessoa_telefone?: string
    
    @Column({type: 'varchar', length: 255, nullable: false, unique: true})
    pessoa_email?: string    
    
    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date 

    @CreateDateColumn({name: 'created_At'})
    ceated_At?: Date  
   
}


/* 
//teste
@OneToMany(() => DbConnectionsEntity, dbConnection => dbConnection.instancia)
conexoes?: DbConnectionsEntity[];  */
