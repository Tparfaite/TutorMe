import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Message]),
    AuthModule,
    
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
