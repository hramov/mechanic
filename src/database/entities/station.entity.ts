import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auth } from './auth.entity';
import { Department } from './department.entity';
import { PhoneBook } from './phoneBook.entity';

@Entity({ name: 'station' })
export class Station {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Department, department => department.id)
    @JoinColumn({ name: 'departmentId' })
    department: Department;

    @ManyToOne(() => Auth, auth => auth.id)
    @JoinColumn({ name: 'workerId' })
    worker: Auth;

    @OneToOne(() => PhoneBook)
    @JoinColumn({ name: 'phoneId' })
    phone: PhoneBook;

    @Column()
    departmentId: number;

    @Column()
    workerId: number;

    @Column()
    phoneId: number;

    @Column()
    position: string;

    @Column()
    title: string;

}