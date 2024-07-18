import { PartialType } from '@nestjs/mapped-types';
import { CreateSocketMessageDto } from './create-socket-message.dto';

export class UpdateSocketMessageDto extends PartialType(CreateSocketMessageDto) {
  id: number;
}
