import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TutorsModule } from './tutors/tutors.module';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';

import { User } from './users/entities/user.entity';
import { UserProfile } from './users/entities/profile.entity';
import { ExamModule } from './exam/exam.module';
import { UserExamModule } from './user-exam/user-exam.module';
import { Exam } from './exam/entities/exam.entity';
import { UserExam } from './user-exam/entities/user-exam.entity';
import { ExamSeeder } from './exam-seeder';
import { ExamService } from './exam/exam.service';
import { SearchTutorModule } from './search-tutor/search-tutor.module';

@Module({
  imports: [
    UsersModule,
    TutorsModule,
    TypeOrmModule.forFeature([Exam, UserExam]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'tutorMe',
      entities: [User, UserProfile, Exam, UserExam],
      synchronize: true,
    }),
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MessageModule,
    ExamModule,
    UserExamModule,
    SearchTutorModule,
  ],
  controllers: [AppController],
  providers: [AppService,ExamSeeder,ExamService],
})
export class AppModule implements OnModuleInit{
  constructor(private readonly examSeeder: ExamSeeder) {}

  async onModuleInit() {
    await this.examSeeder.seed();
  }
}
