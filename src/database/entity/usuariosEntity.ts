import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PessoaEntity } from "./pessoasEntity";
import { RelUsuariosGruposEntity } from "./relUsuariosGruposEntity";

@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn({type:'bigint', unsigned: true})
    usuario_id?: number

    @Column({type: 'varchar', length: 255, nullable: false, unique: true})
    usuario_login?: string

    @Column({type: 'varchar', length: 255, nullable: false})
    usuario_password?: string

    @Column({type: 'date', nullable: true, default: null})
    usuario_ultimoAcesso?: Date

    @Column ({type: 'enum',  enum: ['Ativo', 'Inativo'], default: 'Inativo'})
    usuario_status?: 'Ativo' | 'Inativo'

    @ManyToOne(() => PessoaEntity, { nullable: false })
    @JoinColumn({ name: 'pessoa_id' })
    pessoa_id!: PessoaEntity;  // Relacionamento com a entidade PessoaEntity

    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date
    
    @CreateDateColumn({name: 'created_At'})
    created_At?: Date 

    //estabelece o relacionamento entre as tabelas sem criar uma coluna nesta tabela
    @OneToMany(() => RelUsuariosGruposEntity, rel => rel.relUsuario)
    relUsuario?: RelUsuariosGruposEntity[]
   
}