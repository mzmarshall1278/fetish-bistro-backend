import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FclassService } from './fclass.service';
import { CreateClassDto } from './dto/createClass.dto';

@Controller('fclass')
export class FclassController {
    constructor(private fclassService: FclassService){}

    @Get('/')
    getAllClasses(): Promise<FClass[]> {
        return this.fclassService.getAllClasses()
    }

    @Post('/')
    createClass(@Body() createClassDto: CreateClassDto): Promise<FClass>{
        return this.fclassService.createClass(createClassDto)
    }
}
