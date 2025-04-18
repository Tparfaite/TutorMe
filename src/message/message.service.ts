import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private readonly messageRepository:Repository<Message> ){}

  async createMessage(createMessageDto: CreateMessageDto) :Promise<Message>{
    return await this.messageRepository.save(createMessageDto);
  }

 async findAllMessage():Promise<Message[]> {
    return await this.messageRepository.find();
  }

 async findOneMessage(id: number):Promise<Message> {
    return await this.messageRepository.findOne({where:{id}});
  }

  

  async remove(id: number):Promise<any> {
    return await this.messageRepository.delete(id);
  }

  

 
}
