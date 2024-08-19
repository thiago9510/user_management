import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RelGruposAcaoEntity } from "./relGrupoAcoesEntity";

//ações disponívels no sistema

@Entity('acoes')
export class AcoesEntity{
    @PrimaryGeneratedColumn({type: 'bigint', unsigned: true})
    acao_id?: number

    @Column({type: 'varchar', length: 255, nullable: false})
    acao_nome?: string

    @Column({type: 'varchar', length: 255, nullable: false})
    acao_rota?: string

    @Column({type: 'varchar', length: 255, nullable: false})
    modulo?: string

    @Column({type: 'varchar', length: 255, nullable: false})
    chave?: string

    @Column({type: 'varchar', length: 255, nullable: false})
    acao_descricao?: string

    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date  

    @CreateDateColumn({name: 'created_At'})
    ceated_At?: Date

    //estabelece o relacionamento entre as tabelas sem criar uma coluna em usuarios
    @OneToMany(() => RelGruposAcaoEntity, rel => rel.relAcao)
    relGrupoAcao?: RelGruposAcaoEntity[]
}

