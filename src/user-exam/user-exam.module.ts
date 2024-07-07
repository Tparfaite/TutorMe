import { Module } from '@nestjs/common';
import { UserExamService } from './user-exam.service';
import { UserExamController } from './user-exam.controller';

@Module({
  controllers: [UserExamController],
  providers: [UserExamService],
})
export class UserExamModule {}
