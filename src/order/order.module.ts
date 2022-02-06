import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './order.model';
import { OrderRepository } from './order.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}])
  ],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController]
})
export class OrderModule {}
