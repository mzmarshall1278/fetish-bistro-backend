import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order } from "./order.model";
import { CreateOrderDto } from './dto/createOrder.dto';

@Injectable()
export class OrderRepository {
    constructor(@InjectModel('Order') private readonly Order: Model<Order>){}

    async makeOrder (createOrderDto: CreateOrderDto): Promise<Order>{
        const order = new this.Order(createOrderDto).save();
        return order;
    }
}