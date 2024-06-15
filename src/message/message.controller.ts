import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';


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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(+id, updateMessageDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    const deletedMessage = await this.messageService.remove(+id)
    if(!deletedMessage){
      return {
        message:"not found"
      }
    }
    return {
      message:"Message deleted successfully",
    } 
  }
}
