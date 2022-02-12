import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class SignupDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()    
    password: string;
    
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;
}