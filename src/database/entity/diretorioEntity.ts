import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'

// Defina a entidade para a tabela 'diretorio'
@Entity('diretorio')
export class DiretorioEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    dir_id?: number

    @Column({ type: 'varchar', length: 255 })
    dir_nome?: string

    @Column({ type: 'varchar', length: 255 })
    dir_local?: string

    @Column({ type: 'enum', enum: ['publico', 'privado'], default: 'publico' })
    dir_tipo?: 'publico' | 'privado'
}
