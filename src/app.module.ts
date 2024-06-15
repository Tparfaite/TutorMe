
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TutorsModule } from './tutors/tutors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
dotenv.config(); 
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageModule } from './message/message.module';

             


@Module({
  imports: [
    UsersModule,
    TutorsModule,
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:parseInt(process.env.PORT),
    username:'root',
    password:'',
    database:'tutorMe',
    entities:['dist/**/*.entity{.ts,.js}'],
    synchronize:true
    }),
    AuthModule,
    ConfigModule.forRoot({isGlobal:true}),
    MessageModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
