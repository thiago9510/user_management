import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { gruposusuariosEntity,  } from "./gruposUsuariosEntity";
import { UsuarioEntity } from "./usuariosEntity";

@Entity('rel__usuarios_grupos')
export class RelUsuariosGruposEntity{
    
    @PrimaryGeneratedColumn({type:'bigint', unsigned: true})
    rel_usuario_grupo_id?: number  

    @ManyToOne(() => gruposusuariosEntity, grupo => grupo.relGrupoUsuarios,  { nullable: false })
    @JoinColumn({ name: 'grupo_id' })
    relGrupo!: Partial<gruposusuariosEntity>

    @ManyToOne(() => UsuarioEntity, usuario => usuario.relUsuario, { nullable: false })
    @JoinColumn({ name: 'usuario_id' })  
    relUsuario!: Partial<UsuarioEntity>

    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date
     
    @CreateDateColumn({name: 'created_At'})
    ceated_At?: Date
}
