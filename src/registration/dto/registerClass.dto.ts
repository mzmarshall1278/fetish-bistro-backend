import { IsNotEmpty } from "class-validator";

export class RegisterClassDto {
    
    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    fclass: string;

    @IsNotEmpty()
    date: string

    @IsNotEmpty()
    openForRegistration: Boolean

}