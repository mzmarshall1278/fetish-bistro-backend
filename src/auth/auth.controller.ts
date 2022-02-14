import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { GetUser } from './getUser.decorator';
import { User } from './user.model';
import { JwtPayload } from './jwt.payload';

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

    @Get('/user')
    getLoggedInUser(@GetUser() user: User): Promise<JwtPayload> {
        return this.authService.getLoggedInUser(user);
    }

}
