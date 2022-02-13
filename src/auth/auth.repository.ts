import { ConflictException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";
import { SignupDto } from './dto/signup.dto';
import bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthRepository {
    constructor(
        @InjectModel('User')
        private readonly User: Model<User>
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

    async login(credentials: LoginDto){
        const {username, email, password} = credentials;

        const user = await this.User.findOne({})
    }

    private async hashPassword (password: string, salt: string):Promise<string> {
        return bcrypt.hash(password, salt);
    }
}