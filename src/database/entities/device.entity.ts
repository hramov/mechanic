import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from './property.entity';

@Entity({ name: 'device' })
export class Device {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(() => Property, property => property.deviceId)
    @JoinColumn({ name: 'property' })
    property: Property[]
}