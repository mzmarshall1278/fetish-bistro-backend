import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Registration } from "./registration.model";
import { RegisterClassDto } from './dto/registerClass.dto';
import * as mongoose from 'mongoose';
import { ForbiddenException, NotFoundException } from "@nestjs/common";

export class RegistrationRepository {
    constructor (@InjectModel('Registration')  private readonly Registration: Model<Registration>){}
    
    async registerForClass(registerClass: RegisterClassDto): Promise<Registration> {
        const { user, fclass, date, openForRegistration } = registerClass

        if(!openForRegistration) throw new ForbiddenException('Registration has been closed');
        const registration = await new this.Registration({
            user: new mongoose.Types.ObjectId(user), fclass:  new mongoose.Types.ObjectId(fclass), date, status: 'Pending'
        }).save()

        return registration;
    }

    async confirmRegistration(registrationId: string): Promise<Registration>{
        try {
            return this.Registration.findByIdAndUpdate(registrationId, {$set: {status: 'Confirmed'}})
        } catch (error) {
            throw new NotFoundException('The registration was not found');
        }
    }

    async getFClassRegistration(fclassId: string) {
        const registrations = await this.Registration.aggregate([
            {$match: {fclass: fclassId}}
        ]);
        return registrations;
    }

}