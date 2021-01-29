import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './department.entity';
import { Position } from './position.entity';
import { Station } from './station.entity';

@Entity({ name: 'auth' })
export class Auth {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Position, position => position.id)
    @JoinColumn({ name: 'positionId' })
    position: Position;

    @ManyToOne(() => Department, department => department.id)
    @JoinColumn({ name: 'departmentId' })
    department: Department;

    @Column()
    positionId: number;

    @Column()
    departmentId: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    otherName: string;

    @Column()
    phone: string;

    @Column()
    login: string;

    @Column()
    password: string;

}