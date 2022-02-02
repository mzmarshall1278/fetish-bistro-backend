import { UserRepository } from './User.repository';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([])],
  providers: [UsersService, UserRepository],
  controllers: [UsersController]
})
export class UsersModule {}
