import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreatePackageDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;
    
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    @IsNotEmpty()
    imageUrl: string;

    @IsBoolean()
    @IsNotEmpty()
    available: boolean;

}