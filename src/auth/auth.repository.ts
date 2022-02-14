import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";
import { SignupDto } from './dto/signup.dto';
import bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt.payload';
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthRepository {
    constructor(
        @InjectModel('User')
        private readonly User: Model<User>,
        private jwtService: JwtService
    ) {}

    async signup (credentials: SignupDto): Promise<string> {
        const {username, password, email, phoneNumber} = credentials;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await this.hashPassword(password ,salt);

        try {
            const found = await this.User.findOne({ username });
           if(found) {
            throw new ConflictException('Username already taken');
           }
            await new this.User({username, password: hashedPassword, userType: 'ADMIN', salt, orders: [], classes: [], email, phoneNumber}).save();
            return 'Account Created successfully'
        } catch (error) {
            throw error;
        }
    }

    async login(credentials: LoginDto): Promise<{accessToken: string}>{
        const {username, email, password} = credentials;

        const user = await this.User.findOne({$or: [{username}, {email}]});
        if(!user) throw new UnauthorizedException('Invalid Credentials');

        const userIsVerified = await this.validatePassword(password, user.password, user.salt);
        if(!userIsVerified) throw new UnauthorizedException('Invalid credentials');

        const payload: JwtPayload = {username: user.username, email: user.email, userType: user.UserType};
        const accessToken: string = await this.jwtService.sign(payload);
        return { accessToken };
    }

    async getLoggedInUser(user: User): Promise<JwtPayload> {
        if (!user) {
            throw new UnauthorizedException('Authorization error');
          }
    
            const foundUser = await this.User.findOne({user: user.username});
    
            return {username: foundUser.username, userType: foundUser.UserType, email: foundUser.email}
    }


    private async hashPassword (password: string, salt: string):Promise<string> {
        return bcrypt.hash(password, salt);
    }

    private async validatePassword(password, dbpassword, salt): Promise<boolean> {
        const hash = await bcrypt.hash(password, salt);
        return hash === dbpassword;
    }
}