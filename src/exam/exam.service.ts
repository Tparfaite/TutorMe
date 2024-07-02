import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from './entities/exam.entity';
import { UserExam } from '../user-exam/entities/user-exam.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private examsRepository: Repository<Exam>,
    @InjectRepository(UserExam)
    private userExamsRepository: Repository<UserExam>
  ) {}

  async generateExam(domain: string, level: string): Promise<Exam> {
    return this.examsRepository.findOne({ where: { domain, level } });
  }

  async submitExam(userId: number, examId: number, userAnswers: string[]): Promise<UserExam> {
    const exam = await this.examsRepository.findOne({ where: { id: examId } });
    const correctAnswers = exam.questions.map(q => q.correctAnswer);
    console.log("correct answers",correctAnswers)
    console.log("userAnswers answers",userAnswers)
    const marks = correctAnswers.reduce((score, correctAnswer, idx) => {
      return score + (correctAnswer === userAnswers[idx] ? 1 : 0);
    }, 0);
    console.log("marks",marks)
    const passed = marks >= (correctAnswers.length * 0.6); // Pass if at least 50% correct
    const userExam = this.userExamsRepository.create({ userId, exam, userAnswers, marks, passed });
    return this.userExamsRepository.save(userExam);
  }

  async createExam(examData: Partial<Exam>): Promise<Exam> {
    const exam = this.examsRepository.create(examData);
    return this.examsRepository.save(exam);
  }
}
