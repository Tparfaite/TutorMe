import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateMessageDto {
    @IsString()
    @IsNotEmpty()
    names: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    message: string
}
