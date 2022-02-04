import { IsNotEmpty } from "class-validator";

export class RegisterClassDto {

    @IsNotEmpty()
    id: string
    
    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    paymentStatus: string;

    @IsNotEmpty()
    date: string

}