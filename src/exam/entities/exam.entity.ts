import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  domain: string;

  @Column()
  level: string;

  @Column('json',{unique:true})
  questions: Question[];
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}
