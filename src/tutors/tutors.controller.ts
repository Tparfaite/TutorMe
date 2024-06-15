import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { type } from 'os';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { TutorsService } from './tutors.service';

@Controller('tutors')
export class TutorsController {

    constructor(private readonly tutoService:TutorsService){}

    @Get()
    getTutors(@Query('type') type:string){
        return [{
            type
        }]
    }

    @Get(':id')
    getSingleTutor(@Param('id') id:string ){
        return {
            id
        }
    }

    @Post()
    createTutor(@Body() createTutorDto: CreateTutorDto){
        return {
            firstName:createTutorDto.firstName,
            lastName:createTutorDto.lastName,
            email:createTutorDto.email,
            phoneNumber:createTutorDto.phoneNumber,
            province:createTutorDto.province,
            district:createTutorDto.district,
            sector:createTutorDto.sector,
            clientType:createTutorDto.clientType
        }
    }

    @Delete(':id')
    deleteTutor(@Param('id') id:string ){
        return {
            id
        }
    }

    @Put(':id')
    updateTutor(@Param('id') id:string, @Body() updateTutor:UpdateTutorDto ){
        return {
            id,
            updateTutor
        }
    }

}
