import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { ArquivosEntity } from './arquivos'

// Defina a entidade para a tabela 'aluno_curso'
@Entity('aluno_curso')
export class AlunoCurso {
    @PrimaryGeneratedColumn('increment')
    alunocurso_id?: number

    @Column('bigint', {nullable: false })
    matricula?: number

    @Column('varchar', { length: 255, nullable: false })
    nome_aluno?: string

    @Column('varchar', { length: 255, nullable: false })
    nome_curso?: string

    @ManyToOne(() => ArquivosEntity, { nullable: false })
    @JoinColumn({ name: 'arq_id'})
    arquivo?: ArquivosEntity

    @CreateDateColumn({name: 'created_At'})
    ceated_At?: Date

    @UpdateDateColumn({name: 'updated_At'})
    updated_At?: Date

    @Column({type: 'enum', enum:['Sim', 'Nao'], default: 'Nao'})
    status_integracao?: 'Sim' | 'Nao'
}

