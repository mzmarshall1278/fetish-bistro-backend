import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";


@Injectable()
export class AuthRepository {
    constructor(
        @InjectModel('User')
        private readonly User: Model<User>
    ) {}
}