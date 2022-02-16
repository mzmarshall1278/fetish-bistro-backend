import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order, OrderStatus } from './order.model';
import { User } from 'src/auth/user.model';

@Injectable()
export class OrderService {
    constructor(private orderRepository: OrderRepository){}

    async makeOrder (createOrderDto: CreateOrderDto, user: User): Promise<Order>{
        return this.orderRepository.makeOrder(createOrderDto, user);
    }

    async UpdateOrderStatus(id: string, status: OrderStatus, user: User): Promise<Order> {
        return this.orderRepository.UpdateOrderStatus(id, status, user);
    }

    async getUsersOrders (userId: string, user: User): Promise<Order[]> {
        return this.orderRepository.getUsersOrders(userId, user);
    }
}
