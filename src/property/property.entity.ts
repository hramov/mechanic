import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    typeId: number

    @Column()
    holderId: number;

    @Column()
    title: string;

    @Column()
    invNumber: number;

    @Column()
    quantity: number;

    @Column()
    dateCome: Date;

    @Column()
    dateCheck: Date;

    @Column()
    timeToLive: Date;
}