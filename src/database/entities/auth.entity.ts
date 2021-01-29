import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './department.entity';
import { Position } from './position.entity';

@Entity({ name: 'auth' })
export class Auth {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Position, position => position.id)
    position: Position;

    @ManyToOne(() => Department, department => department.id)
    department: Department;

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