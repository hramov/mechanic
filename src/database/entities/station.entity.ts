import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Auth } from './auth.entity';
import { Department } from './department.entity';
import { Property } from './property.entity';

@Entity({ name: 'station' })
export class Station {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Property, property => property.stationId)
    propertyCount: number;

    @OneToMany(() => Property, property => property.stationId, { cascade: true })
    property: Property[];

    @ManyToOne(() => Department, department => department.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'departmentId' })
    department: Department;

    @ManyToOne(() => Auth, auth => auth.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'workerId' })
    worker: Auth;

    @Column()
    departmentId: number;

    @Column()
    workerId: number;

    @Column()
    ots: string;

    @Column()
    obts: string;

    @Column()
    position: string;

    @Column()
    title: string;

}