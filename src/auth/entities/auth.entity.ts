import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {

    @PrimaryGeneratedColumn()
    id: number;

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