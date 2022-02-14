import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt.payload';
import { User } from '../../dist/auth/user.model';

@Injectable()
export class AuthService {

    constructor(private authRepository: AuthRepository){}

    async signup (credentials: SignupDto): Promise<string> {
        return this.authRepository.signup(credentials)
    }

    async login(credentials: LoginDto): Promise<{accessToken: string}> {
        return this.authRepository.login(credentials);
    }

    async getLoggedInUser(user: User): Promise<JwtPayload> {
        return this.authRepository.getLoggedInUser(user)
    }
}
