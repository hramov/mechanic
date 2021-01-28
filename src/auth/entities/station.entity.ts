import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Station {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    holderId: number;
}