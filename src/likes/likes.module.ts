import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/message/entities/message.entity';
import { Like } from './entities/like.entity';
import { User } from '../users/entities/user.entity'
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  
  imports:[
    TypeOrmModule.forFeature([User,Like]),
    UsersModule,
    ConfigModule,
    JwtModule.registerAsync( {
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: async (configService:ConfigService) =>({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions:{expiresIn:'8h'}
      })
   
   }),
  ],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
