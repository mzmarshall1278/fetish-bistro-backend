import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order } from './order.model';

@Injectable()
export class OrderService {
    constructor(private orderRepository: OrderRepository){}

    async makeOrder (createOrderDto: CreateOrderDto): Promise<Order>{
        return this.orderRepository.makeOrder(createOrderDto);
    }
}
