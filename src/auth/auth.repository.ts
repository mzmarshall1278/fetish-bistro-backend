import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";
import { SignupDto } from './dto/signup.dto';


@Injectable()
export class AuthRepository {
    constructor(
        @InjectModel('User')
        private readonly User: Model<User>
    ) {}

    async signup (credentials: SignupDto) {
        const {username, password, email, phoneNumber} = credentials;
    }
}