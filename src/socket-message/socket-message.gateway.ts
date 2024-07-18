


// src/socket-message.gateway.ts
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { SocketMessageService } from './socket-message.service';
import { CreateSocketMessageDto } from './dto/create-socket-message.dto';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketMessageGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messagesService: SocketMessageService) {}

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateSocketMessageDto, @ConnectedSocket() client: Socket) {
    const message = this.messagesService.create(createMessageDto, client.id);
    const { roomId } = this.messagesService.getClientByName(client.id);
    this.server.to(roomId).emit('message', message);
    return message;
  }

  @SubscribeMessage('findAllMessages')
  findAll(@MessageBody() roomId: string) {
    return this.messagesService.findAll(roomId);
  }

  @SubscribeMessage('joinRoom')
  joinRoom(@MessageBody() data: { name: string; roomId: string }, @ConnectedSocket() client: Socket):any {
    const { name, roomId } = data;
    client.join(roomId);
    return this.messagesService.identify(name, client.id, roomId);
  }

  @SubscribeMessage('typing')
  async typing(@MessageBody() isTyping: boolean, @ConnectedSocket() client: Socket) {
    const { name, roomId } = this.messagesService.getClientByName(client.id);
    client.broadcast.to(roomId).emit('typing', { name, isTyping });
  }
}




// import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
// import { SocketMessageService } from './socket-message.service';
// import { CreateSocketMessageDto } from './dto/create-socket-message.dto';
// import { Socket ,Server} from 'socket.io';

// @WebSocketGateway({
//   cors: {
//     orgin:'*'
//   }
// })
// export class SocketMessageGateway {

//   @WebSocketServer()
//   server:Server;

//   constructor(private readonly socketMessageService: SocketMessageService) {}

  

//   @SubscribeMessage('createMessage')
//   async create(@MessageBody() createSocketMessageDto: CreateSocketMessageDto, @ConnectedSocket() client:Socket) {
//     const message= this.socketMessageService.create(createSocketMessageDto, client.id);
//     this.server.emit('message',message)
//     return message
//   }

//   @SubscribeMessage('findAllSocketMessage')
//   findAll() {
//     return this.socketMessageService.findAll();
//   }
  
//   @SubscribeMessage('joinRoom')
//   joinRoom(
//   @MessageBody('name') name:string,
//   @ConnectedSocket() client:Socket
//  ){
//   return this.socketMessageService.identify(name,client.id)
//  }

//  @SubscribeMessage('typing')
//   async typing(
//     @MessageBody('isTyping') isTyping:boolean,
//     @ConnectedSocket() client:Socket
//   ){
//     const name=this.socketMessageService.getClientByName(client.id);
//     client.broadcast.emit('typing',{name, isTyping})
//   }


// }
