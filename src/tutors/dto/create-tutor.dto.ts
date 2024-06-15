import { IsEnum } from "class-validator";

export class CreateTutorDto {

    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    province: string;
    district: string;
    sector: string;

    @IsEnum(['admin','tutor','parent'],{message:"use correct client type"})
    clientType: 'admin' | 'tutor' | 'parent';

}
