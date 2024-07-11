import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExamService } from './exam.service';

@Controller('exams')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get(':domain/:level')
  generateExam(@Param('domain') domain: string, @Param('level') level: string) {
    return this.examService.generateExam(domain, level);
  }

  @Post(':userId/:examId')
  submitExam(
    @Param('userId') userId: number,
    @Param('examId') examId: number,
    @Body('userAnswers') userAnswers: string[],
    @Body('correctAnswers') correctAnswers:string[]
  ) {
    return this.examService.submitExam(userId, examId, userAnswers,correctAnswers);
  }
}
