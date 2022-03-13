import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 16 })
    screenName: string;

    @Column({ length: 128 })
    password: string;

    @Column({length: 300})
    email: string;

    @Column({length: 300})
    niokname: string;
}
