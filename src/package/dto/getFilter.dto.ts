import { IsBoolean, IsString } from "class-validator";

export class getPackageFilterDto {
    @IsString()
    name: string;

    @IsBoolean()
    available: boolean;
}