import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'position' })
export class Position {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

}