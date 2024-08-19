import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { InstanciasUniversaEntity } from "./instanciasUniversaEntity";

@Entity('db_connections')
export class DbConnectionsEntity{
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    conect_id?: number

    @Column({ type: 'bigint', unsigned: true })
    inst_id?: number

    @Column({ type: 'varchar', length: 255, nullable: false,  unique: true })    
    conect_nome?: string
    
    @Column({ type: 'varchar', length: 255, nullable: false })
    conect_host?: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    conect_port?: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    conect_user?: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    conect_password?: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    conect__database_name?: string

    @Column({type: 'enum', enum: ['Ativo', 'Inativo'], default: 'Inativo'})
    conect_status?: 'Ativo' | 'Inativo'

    @Column({type: 'enum', enum: ['Producao', 'Homologacao', 'Replica'], default: 'Producao'})
    conect_type?: 'Producao' | 'Homologacao' | 'Replica'

    @ManyToOne(() => InstanciasUniversaEntity, instancia => instancia.conexoes, { nullable: false })
    @JoinColumn({ name: 'inst_id' })  
    instancia!: InstanciasUniversaEntity

    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date

    @CreateDateColumn({name: 'created_At'})
    ceated_At?: Date
}


//exemplo de um OneToOne:

/* @OneToOne(() => InstanciasUniversaEntity, (inst_id) => inst_id.conet_id)
@JoinColumn({ name: 'inst_id' })  
inst_id?: InstanciasUniversaEntity */