import { Controller, Get } from '@nestjs/common';
import { FclassService } from './fclass.service';

@Controller('fclass')
export class FclassController {
    constructor(private fclassService: FclassService){}

    @Get('/')
    getAllClasses(){

    }
}
