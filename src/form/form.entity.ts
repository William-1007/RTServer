import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FormData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    linkedIn: string;

    @Column("text", { array: true })
    selectedStacks: string[];

    @Column("text", { array: true })
    selectedFrameworks: string[];

    @Column()
    expertise: string;

    @Column()
    jobType: string;

    @Column()
    schedule: string;

    @Column()
    salary: string;

    @Column()
    location: string;

    @Column()
    summary: string;

    @Column()
    questions: string;
}
