import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderStatus } from './order.model';
import { CreateOrderDto } from './dto/createOrder.dto';

@Injectable()
export class OrderRepository {
    constructor(@InjectModel('Order') private readonly Order: Model<Order>){}

    async makeOrder (createOrderDto: CreateOrderDto): Promise<Order>{
        const order = new this.Order({...createOrderDto, status: 'New'}).save();
        return order;
    }

    async UpdateOrderStatus(id: string, status: OrderStatus): Promise<Order> {
        return this.Order.findByIdAndUpdate({id}, {$set:{status}})
    }

    async getUsersOrders (userId: string): Promise<Order[]> {
        return this.Order.aggregate([
            {$match: {user: userId}}
        ])
    }
}