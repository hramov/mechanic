import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'phonebook' })
export class PhoneBook {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ots: string;

    @Column()
    obts: string;

}