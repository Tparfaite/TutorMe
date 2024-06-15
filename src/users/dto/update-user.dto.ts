import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    firstName:string;
    lastName: string;
    email:string;
    phoneNumber:string;
    province: string;
    district:string;
    sector:string;
    role:string;
    gender: string;
    password:string;
}
