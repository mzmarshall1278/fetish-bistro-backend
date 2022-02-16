import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FclassService } from './fclass.service';
import { CreateClassDto } from './dto/createClass.dto';
import { Registration } from 'src/registration/registration.model';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/getUser.decorator';
import { User } from 'src/auth/user.model';

@Controller('fclass')
export class FclassController {
    constructor(private fclassService: FclassService){}

    @Get('/')
    getAllClasses(): Promise<FClass[]> {
        return this.fclassService.getAllClasses()
    }

    @Post('/')
    @UseGuards(AuthGuard())
    createClass(@Body() createClassDto: CreateClassDto, @GetUser() user: User): Promise<FClass>{
        return this.fclassService.createClass(createClassDto ,user)
    }

    @Put('/:id')
    @UseGuards(AuthGuard())
    closeFclassRegistration (@Param('id') id: string, @GetUser() user: User): Promise<FClass> {
        return this.fclassService.closeFclassRegistration(id ,user);
    }

    @Get('/:id')
    getAllFclassRegistrations(@Param() id: string): Promise<Registration[]> {
        return this.fclassService.getAllFclassRegistrations(id)
    }
}
