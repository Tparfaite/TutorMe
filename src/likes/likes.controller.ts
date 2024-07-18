import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { UsersService } from '../users/users.service';
import { AuthGuardGuard } from 'src/auth/auth-guard/auth-guard.guard';



@Controller('likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService,
    private userService: UsersService
    ) {}

  @Post(':userId/:tutorId')
  @UseGuards(AuthGuardGuard)
  async toggleLike(
    @Param('tutorId', ParseIntPipe) tutorId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    const tutor = await this.userService.findUserById(tutorId);
    const user = await this.userService.findUserById(userId);

    if (!tutor || tutor.role !== 'tutor') {
      throw new NotFoundException('Tutor not found');
    }

    if (!user) {
      throw new NotFoundException('User not found');
    }
    
    return await this.likesService.toggleLike(user, tutor);
  }


   @Get(':tutorId')
  async getLikes(@Param('tutorId', ParseIntPipe) tutorId: number) {
    const tutor = await this.userService.findUserById(tutorId);
    if (!tutor || tutor.role !== 'tutor') {
      throw new NotFoundException('Tutor not found');
    }
    const likesCount = await this.likesService.getLikes(tutor);
    return { likes: likesCount };
  }



  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
