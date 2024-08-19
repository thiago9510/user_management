import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { DiretorioEntity } from './diretorioEntity'

// Defina a entidade para a tabela 'arquivos'
@Entity('arquivos')
export class ArquivosEntity{
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    arq_id?: number

    @Column({ type: 'bigint', unsigned: true })
    dir_id?: number;

    @Column('varchar', { length: 255, nullable: false })
    arq_hash?: string

    @Column('varchar', { length: 255, nullable: false })
    arq_nome?: string

    @Column({ type: 'bigint', unsigned: true })
    arq_size?: number

    @Column({ type: 'varchar', length: 255 })
    arq_tipo?: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    data_hora_insercao?: Date

    @ManyToOne(() => DiretorioEntity, { nullable: false })
    @JoinColumn({ name: 'dir_id' })
    diretorio?: DiretorioEntity
}