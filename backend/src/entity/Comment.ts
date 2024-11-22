import { BaseEntity } from "@src/base_entity/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"

@Entity('comments')
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({type: "varchar"})
    comment: string;

    @Column({type: "varchar",})
    email: string;
}