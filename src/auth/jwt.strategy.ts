import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from "./user.model";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel('User')
        private readonly User: Model<User>
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'aN0th3R5pec1alc0d3'
        })
    }

    async validate(payload: {username: string}) {
        const {username} = payload;

        const user = this.User.findOne({username});

        if(!user) throw new UnauthorizedException('User not authorized');
        return user;
    }

}