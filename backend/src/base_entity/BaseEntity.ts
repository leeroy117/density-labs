import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    
    @CreateDateColumn({type: 'timestamp', name: 'created_at',  })
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at', nullable: true, default: null })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', name: 'is_deleted', nullable: true, default: null})
    isDeleted: Date;
}