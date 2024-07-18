// src/socket-message.service.ts
import { Injectable } from '@nestjs/common';
import { CreateSocketMessageDto } from './dto/create-socket-message.dto';

interface Client {
  name: string;
  roomId: string;
}

@Injectable()
export class SocketMessageService {
  private messages: { name: string; text: string; roomId: string }[] = [];
  private clientToUser: { [clientId: string]: Client } = {};

  identify(name: string, clientId: string, roomId: string): Client {
    const client = { name, roomId };
    this.clientToUser[clientId] = client;
    return client;
  }

  getClientByName(clientId: string): Client {
    return this.clientToUser[clientId];
  }

  create(createMessageDto: CreateSocketMessageDto, clientId: string) {
    const client = this.clientToUser[clientId];
    const message = {
      name: client.name,
      text: createMessageDto.text,
      roomId: client.roomId,
    };
    this.messages.push(message);
    return message;
  }

  findAll(roomId: string) {
    return this.messages.filter(message => message.roomId === roomId);
  }
}





// import { Injectable } from '@nestjs/common';
// import { CreateSocketMessageDto } from './dto/create-socket-message.dto';
// import { SocketMessage } from './entities/socket-message.entity';

// @Injectable()
// export class SocketMessageService {
 

//   messages:SocketMessage[]=[{name:'parfaite',text:'hello'}]
//   clientToUser = {}

//   identify(name:string, clientId:string){
//     this.clientToUser[clientId]=name;
//     return Object.values(this.clientToUser)
//    }
 
//    getClientByName(clientId:string){
//      return this.clientToUser[clientId]
//    }
  
//   create(createSocketMessageDto: CreateSocketMessageDto, clientId:string) {
//     const message={
//       name:this.clientToUser[clientId],
//       text:createSocketMessageDto.text
//     }
//     this.messages.push(message);
//     return message
//   }

//   findAll() {
//     return this.messages
//   }

  

  
// }
