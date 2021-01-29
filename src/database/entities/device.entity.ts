import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'device' })
export class Device {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

}