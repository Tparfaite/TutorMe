import { Controller, Get, Query } from '@nestjs/common';
import { SearchTutorService } from './search-tutor.service';
import { User } from 'src/users/entities/user.entity';

@Controller('search-tutor')
export class SearchTutorController {
  constructor(private readonly searchTutorService: SearchTutorService) {}

  @Get()
  async searchTutors(@Query('q') query: string): Promise<User[]> {
    return this.searchTutorService.searchTutors(query);
  }
}
