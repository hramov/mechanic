import { Station } from './station.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './department.entity';
import { Device } from './device.entity';

@Entity({ name: 'property' })
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Device)
    @JoinColumn({ name: 'deviceId' })
    device: Device;

    @ManyToOne(() => Department, department => department.id)
    @JoinColumn({ name: 'departmentId' })
    department: Department;

    @ManyToOne(() => Station, station => station.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'stationId' })
    station: Station;

    @Column()
    deviceId: number;

    @Column()
    departmentId: number;

    @Column()
    stationId: number;

    @Column()
    title: string;

    @Column()
    description: string;

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

    @Column({ nullable: true })
    image: string;
}