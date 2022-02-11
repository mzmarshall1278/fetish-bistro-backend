import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order, OrderStatus } from './order.model';

@Injectable()
export class OrderService {
    constructor(private orderRepository: OrderRepository){}

    async makeOrder (createOrderDto: CreateOrderDto): Promise<Order>{
        return this.orderRepository.makeOrder(createOrderDto);
    }

    async UpdateOrderStatus(id: string, status: OrderStatus): Promise<Order> {
        return this.orderRepository.UpdateOrderStatus(id, status);
    }

    async getUsersOrders (userId: string): Promise<Order[]> {
        return this.orderRepository.getUsersOrders(userId)
    }
}
