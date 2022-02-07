import { Body, Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order } from './order.model';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get('/')
    makeOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.makeOrder(createOrderDto);
    }
}
