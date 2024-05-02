import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;
    
    @Column({ length: 25 })
    username:string;

    @Column({ length: 25 })
    role:string;

    @Column({ length: 25 })
    email:string;

    @Column('date') 
    created_at:Date;

    @Column('date') 
    updated_at:Date;

    @Column() 
    isActive:boolean;
}