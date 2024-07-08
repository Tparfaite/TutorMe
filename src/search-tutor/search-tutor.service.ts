import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SearchTutorService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async searchTutors(query: string): Promise<User[]> {
    const lowerQuery = query.toLowerCase();
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.userProfile', 'userProfile')
      .where('LOWER(user.firstName) LIKE :query', { query: `%${lowerQuery}%` })
      .orWhere('LOWER(user.lastName) LIKE :query', { query: `%${lowerQuery}%` })
      .orWhere('LOWER(user.province) LIKE :query', { query: `%${lowerQuery}%` })
      .orWhere('LOWER(user.district) LIKE :query', { query: `%${lowerQuery}%` })
      .orWhere('LOWER(user.sector) LIKE :query', { query: `%${lowerQuery}%` })
      .orWhere('LOWER(userProfile.domain) LIKE :query', { query: `%${lowerQuery}%` })
      .orWhere('LOWER(userProfile.level) LIKE :query', { query: `%${lowerQuery}%` })
      .orWhere('LOWER(userProfile.description) LIKE :query', { query: `%${lowerQuery}%` })
      .orWhere('LOWER(userProfile.otherInterest) LIKE :query', { query: `%${lowerQuery}%` })
      .getMany();
  }
}
