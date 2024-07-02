import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Exam } from '../../exam/entities/exam.entity';

@Entity()
export class UserExam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => Exam,{onDelete:'CASCADE',onUpdate:'CASCADE'})
  exam: Exam;

  @Column('json')
  userAnswers: string[];

  @Column()
  marks: number;

  @Column({ default: false })
  passed: boolean;
}
