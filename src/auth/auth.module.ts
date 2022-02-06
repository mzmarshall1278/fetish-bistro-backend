import { AuthRepository } from './auth.repository';
import { UserSchema } from './user.model';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository]
})
export class AuthModule {}
