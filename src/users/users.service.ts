import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserParams, CreateUserProfileParams, UpdateUserParams } from '../utills/types';
import { UserProfile } from './entities/profile.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

 constructor(
  @InjectRepository(User) private readonly userRepository:Repository<User> ,
  @InjectRepository(UserProfile) private readonly userProfileRepository: Repository<UserProfile>
  ){}




 async createUser(userDetails: CreateUserParams){
  
  const existingUser= await this.userRepository.findOne({where:{email:userDetails.email}})
  if(existingUser){
    return{
      message:"user with this email already exist"
    }
     
  }
  const salt = 12;
  const hashedPassword = await bcrypt.hash(userDetails.password,salt);
  userDetails.password = hashedPassword;
  const newUser = this.userRepository.create({
    ...userDetails, 
    createdAt: new Date()
  })
   return this.userRepository.save(newUser)

 

}

  


 async findUsers(){
    return await this.userRepository.find({relations: ['userProfile']})
  }

  updateUser(id:number, updateUserDetails:UpdateUserParams){
   this.userRepository.update({id},{...updateUserDetails})
  }

  deleteUser(id:number){
    this.userRepository.delete({id})
  }

 
  async createUserProfile(id:number, createUserProfileDetails:CreateUserProfileParams){
    const user = await this.userRepository.findOneBy({id})

    if(!user){
      throw new HttpException(
        "USER NOT FOUND, You can't give a profile ",
        HttpStatus.BAD_REQUEST,
      );
    }
   
    const newProfile = this.userProfileRepository.create(createUserProfileDetails);
    const savedProfile = await this.userProfileRepository.save(newProfile);
    user.userProfile = savedProfile;
    const updatedUser = await this.userRepository.save(user);
   
   
    console.log("users",updatedUser);

    return updatedUser
   
  }


  async findUserByEmail(email:string){
    const user = await this.userRepository.findOne({where:{email}})
    return user
  }



 
  






}
