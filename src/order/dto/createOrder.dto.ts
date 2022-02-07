import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Order } from "../order.model";

export class CreateOrderDto {

    @IsNotEmpty()
    @IsString()
    user: string

    @IsNotEmpty()
    @IsString()
    package: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    date: string;

    @IsNotEmpty()
    @IsString()
    status: Order;
}