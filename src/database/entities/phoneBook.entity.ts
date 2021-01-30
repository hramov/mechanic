import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'phonebook' })
export class PhoneBook {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    ots: string;

    @Column()
    obts: string;

}