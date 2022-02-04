import { Controller, Get } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FclassService } from './fclass.service';

@Controller('fclass')
export class FclassController {
    constructor(private fclassService: FclassService){}

    @Get('/')
    getAllClasses(): Promise<FClass[]> {
        return this.fclassService.getAllClasses()
    }
}
