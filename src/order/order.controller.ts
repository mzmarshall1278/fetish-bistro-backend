import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order, OrderStatus } from './order.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('order')
@UseGuards(AuthGuard())
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get('/')
    makeOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.makeOrder(createOrderDto);
    }

    @Put('/:id')
    updateOrderStatus(@Param('id') id: string, @Body('status') status: OrderStatus): Promise<Order>{
        return this.orderService.UpdateOrderStatus( id ,status)
    }

    @Get('/:userId')
    getUsersOrders(@Param('userId') userId: string): Promise<Order[]> {
        return this.orderService.getUsersOrders(userId);
    }
}
