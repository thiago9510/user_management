import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DbConnectionsEntity } from "./dbConnections";

@Entity('instancias_universa')
export class InstanciasUniversaEntity{
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    inst_id?: number

    @Column({ type: 'varchar', length: 255, nullable: false,  unique: true })    
    inst_nome?: string
    
    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    inst_url?: string

    @Column({type: 'enum', enum:['Ead', 'Presencial', 'Ambigua'], default: 'Ambigua'})
    inst_modalidade?: 'Ead' | 'Presencial' | 'Ambigua'

    @Column({type: 'enum', enum:['Producao', 'MEC', 'Homologacao'], default: 'Producao'})
    inst_tipo?: 'Producao' | 'MEC' | 'Homologacao'

    @Column({type: 'enum', enum: ['Ativo', 'Inativo'], default: 'Inativo'})
    inst_status?: 'Ativo' | 'Inativo'

    //teste
    @OneToMany(() => DbConnectionsEntity, dbConnection => dbConnection.instancia)
    conexoes?: DbConnectionsEntity[]; 

    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date

    @CreateDateColumn({name: 'created_At'})
    ceated_At?: Date    
}