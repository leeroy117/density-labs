import { BaseEntity } from '@src/base_entity/BaseEntity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('comments')
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: number;

    @Column({type: 'varchar'})
    public comment: string;

    @Column({type: 'varchar',})
    public email: string;
}