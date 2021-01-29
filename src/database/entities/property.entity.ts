import { Station } from './station.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './department.entity';
import { Device } from './device.entity';

@Entity({ name: 'property' })
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Device)
    @JoinColumn()
    type: Device;

    @ManyToOne(() => Department, department => department.id)
    holder: Department;

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