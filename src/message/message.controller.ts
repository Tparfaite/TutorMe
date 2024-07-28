import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { error } from 'console';


@Controller('message')
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
    ) {}

  @Post('create')
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createMessage(createMessageDto);
  }

  @Get('getAll')
  async findAll() {
     const messages= await this.messageService.findAllMessage();
     if(!messages){
      return {
        message:'No message available'
      }
     }
     return {
      message:"successful retrieved all messages",
      data:messages
     }
  }

  @Get('getOne/:id')
  async findOne(@Param('id') id: string) {
    
    return this.messageService.findOneMessage(+id);
  }

  

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    const messageToDelete = await this.messageService.findOneMessage(+id)
    try{
      if(messageToDelete){
        const deletedMessage = await this.messageService.remove(+id);
        return {
          message:'Message deleted successfully',
        }
      }else {
        return{
          message:"Not Found"
        }
      }
    }catch (error){
      return{
        message:error
      }
    }
  }

  
}
