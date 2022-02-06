import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order } from "./order.model";

@Injectable()
export class OrderRepository {
    constructor(@InjectModel('Order') private readonly Order: Model<Order>){}

    
}