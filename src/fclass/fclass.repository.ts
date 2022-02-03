import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FClass } from "./fclass.model";

export class FClassRepository {
    constructor(
        @InjectModel('FClass')
        private readonly FClass: Model<FClass>
    ){}

    
}