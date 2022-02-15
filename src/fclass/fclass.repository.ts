import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateClassDto } from "./dto/createClass.dto";
import { FClass } from "./fclass.model";
import { RegistrationService } from '../registration/registration.service';
import { Registration } from "src/registration/registration.model";

@Injectable()
export class FClassRepository {
    constructor(
        @InjectModel('FClass')
        private readonly FClass: Model<FClass>,
        private registrationService: RegistrationService
    ){}

    async getAllClasses(): Promise<FClass[]> {
        return this.FClass.aggregate([]);
    }

    async createClass(createClassDto: CreateClassDto): Promise<FClass>{
        const fClass = await new this.FClass(createClassDto).save()
        return fClass;
    }

    async closeFclassRegistration (id: string): Promise<FClass> {
        const fclass = await this.FClass.findOneAndUpdate({_id: id},{$set: {openForRegistration: false}});
        return fclass
    }

    async getAllFclassRegistrations(id: string): Promise<Registration[]> {
        return this.registrationService.getFClassRegistration(id);
    }
}