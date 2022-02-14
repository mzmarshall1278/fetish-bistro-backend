import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(private authRepository: AuthRepository){}

    async signup (credentials: SignupDto): Promise<string> {
        return this.authRepository.signup(credentials)
    }

    async login(credentials: LoginDto): Promise<{accessToken: string}> {
        return this.authRepository.login(credentials);
    }
    
}
