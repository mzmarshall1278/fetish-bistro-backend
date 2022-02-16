import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderStatus } from './order.model';
import { CreateOrderDto } from './dto/createOrder.dto';
import { User } from "src/auth/user.model";

@Injectable()
export class OrderRepository {
    constructor(@InjectModel('Order') private readonly Order: Model<Order>){}

    async makeOrder (createOrderDto: CreateOrderDto, user: User): Promise<Order>{
        const order = new this.Order({...createOrderDto, status: 'New', user: user.id}).save();
        return order;
    }

    async UpdateOrderStatus(id: string, status: OrderStatus, user: User): Promise<Order> {
        if(user.UserType !== 'Admin') throw new UnauthorizedException('Not Authorized!!!');
        return this.Order.findByIdAndUpdate({id, user: user.id}, {$set:{status}});
    }

    async getUsersOrders (userId: string, user: User): Promise<Order[]> {
        if(user.id !== userId || user.UserType !== 'Admin') throw new UnauthorizedException('Not Authorized');
        return this.Order.aggregate([
            {$match: {user: userId}}
        ])
    }
}