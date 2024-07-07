import { PartialType } from '@nestjs/mapped-types';
import { CreateUserExamDto } from './create-user-exam.dto';

export class UpdateUserExamDto extends PartialType(CreateUserExamDto) {}
