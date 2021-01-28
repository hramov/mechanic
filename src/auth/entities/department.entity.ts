import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

}