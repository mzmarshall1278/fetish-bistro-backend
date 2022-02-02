import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UpdatePackageDto {
    
    @IsString()
    id: string;
    
    @IsString()
    name: string;
    
    @IsString()
    description: string;
    
    @IsNumber()
    quantity: number;
    
    @IsString()
    imageUrl: string;

    @IsBoolean()
    available: boolean

}