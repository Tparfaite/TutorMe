import { Injectable } from '@nestjs/common';
import { CreateUserExamDto } from './dto/create-user-exam.dto';
import { UpdateUserExamDto } from './dto/update-user-exam.dto';

@Injectable()
export class UserExamService {
  create(createUserExamDto: CreateUserExamDto) {
    return 'This action adds a new userExam';
  }

  findAll() {
    return `This action returns all userExam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userExam`;
  }

  update(id: number, updateUserExamDto: UpdateUserExamDto) {
    return `This action updates a #${id} userExam`;
  }

  remove(id: number) {
    return `This action removes a #${id} userExam`;
  }
}
