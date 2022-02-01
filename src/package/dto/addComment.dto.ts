import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddCommentDto {
    @IsString()
    @IsNotEmpty()
    userName: string;


    @IsString()
    @IsNotEmpty()
    comment: string;


    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsString()
    @IsNotEmpty()
    packageId: string;
}