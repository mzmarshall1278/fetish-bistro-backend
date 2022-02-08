import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, UpdateWriteOpResult } from "mongoose";
import { CreateClassDto } from "./dto/createClass.dto";
import { FClass } from "./fclass.model";

@Injectable()
export class FClassRepository {
    constructor(
        @InjectModel('FClass')
        private readonly FClass: Model<FClass>
    ){}

    async getAllClasses(): Promise<FClass[]> {
        return this.FClass.aggregate([]);
    }

    async createClass(createClassDto: CreateClassDto): Promise<FClass>{
        const fClass = await new this.FClass(createClassDto).save()
        return fClass;
    }
}