import { InjectModel } from "@nestjs/mongoose";
import { Model, UpdateWriteOpResult } from "mongoose";
import { RegisterClassDto } from "./dto/registerClass.dto";
import { FClass } from "./fclass.model";

export class FClassRepository {
    constructor(
        @InjectModel('FClass')
        private readonly FClass: Model<FClass>
    ){}

    async getAllClasses(): Promise<FClass[]> {
        return this.FClass.aggregate([]);
    }

    async registerForClass(registerDto: RegisterClassDto): Promise<UpdateWriteOpResult>{
        const {id, user, date} = registerDto;
        return this.FClass.updateOne({id}, {$push: {registeredUsers: {user, date}}})
    }
}