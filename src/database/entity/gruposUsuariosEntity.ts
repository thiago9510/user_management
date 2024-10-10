import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RelUsuariosGruposEntity } from "./relUsuariosGruposEntity";
import { RelGruposAcaoEntity } from "./relGrupoAcoesEntity";

@Entity('grupos_usuarios')
export class gruposusuariosEntity{
    @PrimaryGeneratedColumn({type:'bigint', unsigned: true})
    grupo_id?: number

    @Column({type: 'varchar', length: 255, nullable: false, unique: true})
    grupo_nome?: string

    @Column({type: 'varchar', length: 255, nullable: false})
    grupo_descricao?: string

    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date  

    @CreateDateColumn({name: 'created_At'})
    created_At?: Date

    @OneToMany(() => RelUsuariosGruposEntity, rel => rel.relGrupo)
    relGrupoUsuarios?: RelUsuariosGruposEntity[]

    @OneToMany(() => RelGruposAcaoEntity, rel => rel.relGrupo)
    relGrupoAcao?: RelGruposAcaoEntity[]
    
}