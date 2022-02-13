import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authRepository: AuthRepository){}

    @Post()
    @UsePipes(ValidationPipe)
    signup(@Body() credentials: SignupDto): Promise<string>{
        return this.authRepository.signup(credentials);
    }
}
