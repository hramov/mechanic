import { Station } from './../../auth/entities/station.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
    location: string;

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

    @ManyToOne(() => Station, station => station.id)
    station: Station;
}