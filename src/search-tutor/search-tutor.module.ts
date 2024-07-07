import { Module } from '@nestjs/common';
import { SearchTutorService } from './search-tutor.service';
import { SearchTutorController } from './search-tutor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UserProfile } from 'src/users/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile])],
  controllers: [SearchTutorController],
  providers: [SearchTutorService],
})
export class SearchTutorModule {}
