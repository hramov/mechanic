import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auth } from './auth.entity';
import { Department } from './department.entity';
import { PhoneBook } from './phoneBook.entity';

@Entity({ name: 'station' })
export class Station {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Department)
    @JoinColumn()
    department: Department | number;

    @OneToOne(() => Auth)
    @JoinColumn()
    worker: Auth | number;

    @OneToOne(() => PhoneBook)
    @JoinColumn()
    phone: PhoneBook | number;

    @Column()
    position: string;

    @Column()
    title: string;

}