import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Registration } from "./registration.model";

export class RegistrationRepository {
    constructor (@InjectModel('Registration')  private readonly Registration: Model<Registration>){}
    
}