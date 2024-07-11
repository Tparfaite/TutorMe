import { Module } from '@nestjs/common';
import { SocketMessageService } from './socket-message.service';
import { SocketMessageGateway } from './socket-message.gateway';

@Module({
  providers: [SocketMessageGateway, SocketMessageService],
})
export class SocketMessageModule {}
