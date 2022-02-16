import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order, OrderStatus } from './order.model';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/getUser.decorator';
import { User } from 'src/auth/user.model';

@Controller('order')
@UseGuards(AuthGuard())
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get('/')
    makeOrder(@Body() createOrderDto: CreateOrderDto ,@GetUser() user: User): Promise<Order> {
        return this.orderService.makeOrder(createOrderDto, user);
    }

    @Put('/:id')
    updateOrderStatus(@Param('id') id: string, @Body('status') status: OrderStatus, @GetUser() user: User): Promise<Order>{
        return this.orderService.UpdateOrderStatus( id ,status, user)
    }

    @Get('/:userId')
    getUsersOrders(@Param('userId') userId: string ,@GetUser() user: User): Promise<Order[]> {
        return this.orderService.getUsersOrders(userId, user);
    }
}
