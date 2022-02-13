import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {

    constructor(private authRepository: AuthRepository){}

    signup (credentials: SignupDto): Promise<string> {
        return this.authRepository.signup(credentials)
    }
    
}
