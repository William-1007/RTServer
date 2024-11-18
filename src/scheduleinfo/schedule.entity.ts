import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ScheduleData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column() // Make this column nullable if needed
    date: string;

    @Column({ nullable: true })
    time: string;

    @Column() // Make this column nullable if needed
    timezone: string;

    @Column() // Make this column nullable if needed
    phone: string;

    @Column({ nullable: true })
    message: string;
}
