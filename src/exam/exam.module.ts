import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { UserExam } from 'src/user-exam/entities/user-exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exam, UserExam])],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
