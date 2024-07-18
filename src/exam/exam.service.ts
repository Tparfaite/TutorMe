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


  private getRandomQuestions(questions: any[], count: number): any[] {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  



  async generateExam(domain: string, level: string): Promise<{exam: Exam, selectedQuestions: any[], correctAnswers: string[]}> {
   
    try{
      const exam = await this.examsRepository.findOne({ where: { domain, level } });

      if (exam && exam.questions.length > 10) {
        const selectedQuestions = this.getRandomQuestions(exam.questions, 10);
        const correctAnswers = selectedQuestions.map(question => question.correctAnswer);
        return { exam, selectedQuestions, correctAnswers };
      }
      return { exam, selectedQuestions: exam.questions, correctAnswers: exam.questions.map(question => question.correctAnswer) };
    }
    catch(error:any){
      throw new Error(`Exam with domain ${domain} and level ${level} not found ${error.message}`);
    }

  }
  


  async submitExam(userId: number, examId: number, userAnswers: string[],correctAnswers:string[]): Promise<UserExam> {
    const exam = await this.examsRepository.findOne({ where: { id: examId } });
  
    console.log("correct answers",correctAnswers)
    console.log("userAnswers answers",userAnswers)
    const marks = correctAnswers.reduce((score, correctAnswer, idx) => {
      return score + (correctAnswer === userAnswers[idx] ? 1 : 0);
    }, 0);
    console.log("marks",marks)
    const passed = marks >= (correctAnswers.length * 0.6);
    const userExam = this.userExamsRepository.create({ userId, exam, userAnswers, marks, passed });
    return this.userExamsRepository.save(userExam);
  }

  async createExam(examData: Partial<Exam>): Promise<Exam> {
    const exam = this.examsRepository.create(examData);
    return this.examsRepository.save(exam);
  }
}
