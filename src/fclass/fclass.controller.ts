import { Body, Controller, Get, Put } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FclassService } from './fclass.service';
import { RegisterClassDto } from './dto/registerClass.dto';
import { UpdateWriteOpResult } from 'mongoose';

@Controller('fclass')
export class FclassController {
    constructor(private fclassService: FclassService){}

    @Get('/')
    getAllClasses(): Promise<FClass[]> {
        return this.fclassService.getAllClasses()
    }

    @Put('/:id')
    registerForClass(@Body() registerDto: RegisterClassDto): Promise<UpdateWriteOpResult>{
        return this.fclassService.registerForClass(registerDto);
    }
}
