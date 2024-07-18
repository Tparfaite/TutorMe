import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserProfile } from './entities/profile.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Like } from 'src/likes/entities/like.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserProfile]),
    
      ConfigModule,
      JwtModule.registerAsync( {
        imports:[ConfigModule],
        inject:[ConfigService],
        useFactory: async (configService:ConfigService) =>({
          secret: configService.get<string>('JWT_SECRET'),
          signOptions:{expiresIn:'8h'}
        })
     
     }),
    
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
