import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FclassService } from './fclass.service';
import { CreateClassDto } from './dto/createClass.dto';
import { Registration } from 'src/registration/registration.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('fclass')
export class FclassController {
    constructor(private fclassService: FclassService){}

    @Get('/')
    getAllClasses(): Promise<FClass[]> {
        return this.fclassService.getAllClasses()
    }

    @Post('/')
    @UseGuards(AuthGuard())
    createClass(@Body() createClassDto: CreateClassDto): Promise<FClass>{
        return this.fclassService.createClass(createClassDto)
    }

    @Put('/:id')
    @UseGuards(AuthGuard())
    closeFclassRegistration (@Param('id') id: string): Promise<FClass> {
        return this.fclassService.closeFclassRegistration(id);
    }

    @Get('/:id')
    getAllFclassRegistrations(@Param() id: string): Promise<Registration[]> {
        return this.fclassService.getAllFclassRegistrations(id)
    }
}
