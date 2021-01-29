import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Auth } from './auth.entity';

@Entity({ name: 'department' })
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

}