import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserParams, CreateUserProfileParams, UpdateUserParams } from '../utills/types';
import { UserProfile } from './entities/profile.entity';
import * as bcrypt from 'bcrypt';
import { error } from 'console';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class UsersService {


 constructor(
  @InjectRepository(User) private readonly userRepository:Repository<User> ,
  @InjectRepository(UserProfile) private readonly userProfileRepository: Repository<UserProfile>
  ){}




  async createUser(userDetails: CreateUserParams) {
    try {
    
      const admin = {
        firstName: process.env.AD_FIRSTNAME,
        lastName: process.env.AD_LASTNAME,
        email: process.env.AD_EMAIL,
        phoneNumber: process.env.AD_PHONE,
        password: process.env.AD_PASSWORD,
        province: process.env.AD_PROVINCE,
        district: process.env.AD_DISTRICT,
        sector: process.env.AD_SECTOR,
        gender: 'male',
        role: 'admin',
        createdAt: new Date()
      };
  
      const salt = 12;
      const adminPasswordHash = await bcrypt.hash(admin.password, salt);
      admin.password = adminPasswordHash;
  
     
      const existAdmin = await this.userRepository.findOne({ where: { email: admin.email } });
      if (!existAdmin) {
        await this.userRepository.save(admin);
      }
  
     
      const existingUser = await this.userRepository.findOne({ where: { email: userDetails.email } });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
  
     
      const hashedPassword = await bcrypt.hash(userDetails.password, salt);
      userDetails.password = hashedPassword;
      const newUser = this.userRepository.create({
        ...userDetails,
        createdAt: new Date()
      });
      return await this.userRepository.save(newUser);
  
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  
 async findUsers(){
    return await this.userRepository.find({relations: ['userProfile']})
  }

  async updateUser(id:number, updateUserDetails:UpdateUserParams){
    const userUpdate = await this.userRepository.findOne({where:{id}});
    if(!userUpdate){
      // throw error("user not found")
      return {
        message:"user not found"
      }
    }
    await this.userRepository.update(id,updateUserDetails)
    return await this.userRepository.findOne({where:{id}})
   
  }



  async deleteUser(id:number):Promise<{message:string}>{
    const user = await this.userRepository.findOne({where:{id},relations: ['userProfile','givenLikes','receivedLikes'] })
    try {
      if(user){
        await this.userRepository.delete(id)
        return {
          message:"user deleted successfully"
        }
      }else{
        return{
          message:"user not found"
        }
      }
    } catch (error){
      console.log("error in deleting user",error)
      throw new HttpException('Error deletingnn user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
  }

 
  async createUserProfile(id:number, createUserProfileDetails:CreateUserProfileParams){
    const user = await this.userRepository.findOneBy({id})

    try{
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
    catch (error){
      throw new HttpException('message',HttpStatus.BAD_REQUEST)
    }

  }

 
  async findUserByEmail(email:string){
    const user = await this.userRepository.findOne({where:{email}})
   return user || null
    
  }

  async findUserById(userId:number){
    const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['userProfile'] });
    return user
  }



}
