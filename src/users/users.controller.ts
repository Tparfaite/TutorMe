import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, BadRequestException, Req, Res, UseGuards, NotFoundException, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserProfileDto } from './dto/create-userProfile.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { AuthGuardGuard } from 'src/auth/auth-guard/auth-guard.guard';
import { currentUser } from 'src/auth/decorators/current-user.decorator';



@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
    ) {}

  @Get('getAll')
  async getUsers():Promise<User[] | string> {
    const users = await this.usersService.findUsers();
    return users
  }

  // @Get('getAll')
  // @UseGuards(AuthGuardGuard)
  // async getUsers(@currentUser() user:User) : Promise<User[] | string>{
  //   console.log('this is user from decorator',user)
  //   let users:User[];
  //   users = await this.usersService.findUsers()
  //   return users
  //   if(user.role === 'tutor'){
  //     const parents = users.filter((userfound)=>userfound.role==='parent');
  //     if(!parents.length){
  //       console.log("no parent found")
  //       return []
  //     }
  //     return parents;

  //   }else if(user.role === 'parent'){
  //     const tutors = users.filter((userfound)=>userfound.role==='tutor');
  //     if(!tutors.length){
  //       console.log("no tutor found")
  //       return "No tutor found"
  //     }
  //     return tutors
  //   }else{
  //    users = await this.usersService.findUsers()
  //   return users
  //   }
  // }

  @Post('create')
  async createUser(@Body() createUserDto:CreateUserDto ){
   return await this.usersService.createUser(createUserDto)
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body('email') email:string,
    @Body('password') password: string,
    @Res() response: Response,
    ){
      const user = await this.usersService.findUserByEmail(email);
      if(!user){
        return response.status(HttpStatus.NOT_FOUND).json({ message: 'User with this email not found' });
        
      }
 
      const unhashedPassword = await bcrypt.compare(password, user.password)
      if(!unhashedPassword){
        throw new BadRequestException('Invalid credentials')
      }
 
      const payload = {
        id:user.id,
        email:user.email,
        firstName:user.firstName,
        lastName:user.lastName,
        phoneNumber:user.phoneNumber,
        role:user.role
      }
      console.log("payload",payload)
      const accessToken = await this.jwtService.signAsync(payload);

      response.cookie('accessToken', accessToken, {
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000, 
      });

      return response.json({ accessToken: accessToken });
    
  }

  @Get('logout')
  logout(@Res() response:Response):void{
    response.clearCookie('accessToken')
    response.status(200).json({message:'Logout successful'})
  }  


  @Put(':id')
  async updateById(@Param('id',ParseIntPipe)id:number, @Body() updateUserDto:UpdateUserDto){
    await this.usersService.updateUser(id, updateUserDto)
  }

  @Patch('/update/:id')
  async updateUser(@Param('id',ParseIntPipe) id:number, @Body() updateUserDetails:UpdateUserDto){
   return await this.usersService.updateUser(id,updateUserDetails)
  }

  // @Delete('/delete/:id')
  // async deleteById(@Param('id',ParseIntPipe) id:number) {
  //   return await this.usersService.deleteUser(id)
  // }

  @Delete('/delete/:id')
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findUserById(id);
   
    if(user){
      try {
        const result = await this.usersService.deleteUser(id);
        console.log("uuuuuuu",result)
        return {
          statusCode: HttpStatus.OK,
          message: result.message,
        };
      } catch (error) {
        throw new HttpException(
          {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
            
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }else{
      return "user not found"
    }
   
  }


  // @Delete('/delete/:id')
  // async deleteById(@Param('id',ParseIntPipe) id:number){
  // return await this.usersService.deleteUser(id)
  // }

  @Post('/profile/:id')
  async createUserProfile(@Param('id',ParseIntPipe) id:number, @Body() createUserProfileDto:CreateUserProfileDto){
    return await this.usersService.createUserProfile(id,createUserProfileDto)
  }

  @Get(':id')
  async getUserById(@Param('id',ParseIntPipe) id:number){
   const user =await this.usersService.findUserById(id)
   return user

  }













}
