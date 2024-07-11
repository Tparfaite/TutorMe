import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like) private  likeRepository:Repository<Like>,
    @InjectRepository(User) private userRepository:Repository<User>

    ){}

  
  async toggleLike(user: User, tutor: User): Promise<Like | void> {
    const existingLike = await this.likeRepository.findOne({ where: { user, tutor } });
   console.log("got likes",existingLike)
    try{
      if (existingLike) {
        tutor.likeCount -= 1;
        await this.userRepository.save(tutor);
        return await this.likeRepository.remove(existingLike);
        
      } else {
        const like = new Like();
        like.user = user;
        like.tutor = tutor;
        tutor.likeCount += 1;
        await this.userRepository.save(tutor);
        return await this.likeRepository.save(like);
       
      }
  
    }catch (error){
     console.log("errors",error)
    }
   
    
  }

  
  async getLikes(tutor: User): Promise<number> {
     const tutorLikeCount= await this.likeRepository.count({ where: { tutor } });
     return tutorLikeCount
  }


  findAll() {
    return `This action returns all likes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
