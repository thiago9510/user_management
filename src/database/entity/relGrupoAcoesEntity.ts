import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { gruposusuariosEntity } from "./gruposUsuariosEntity"; 
import { AcoesEntity } from "./acoesEntity";

//relação das acoes que os grupos podem realizar

@Entity('rel__grupo_acoes')
export class RelGruposAcaoEntity {
    @PrimaryGeneratedColumn({type: 'bigint', unsigned: true})
    grupo_acoes_id?: number

    @ManyToOne(() => gruposusuariosEntity, grupo => grupo.relGrupoUsuarios,  { nullable: false })
    @JoinColumn({ name: 'grupo_id' })
    relGrupo!: gruposusuariosEntity

    @ManyToOne(() => AcoesEntity, acao => acao.relGrupoAcao,  { nullable: false })
    @JoinColumn({ name: 'acao_id' })
    relAcao!: AcoesEntity

    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date  

    @CreateDateColumn({name: 'created_At'})
    ceated_At?: Date   
    
}