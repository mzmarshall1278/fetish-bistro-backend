import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signup(@Body() credentials: SignupDto): Promise<string>{
        return this.authService.signup(credentials);
    }

    @Post('/login')
    login(@Body() credentials: LoginDto): Promise<{accessToken: string}> {
        return this.authService.login(credentials);
    }
}
