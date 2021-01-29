import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Auth } from './auth.entity';

@Entity({ name: 'position' })
export class Position {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

}