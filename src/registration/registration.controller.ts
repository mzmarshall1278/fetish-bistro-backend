import { RegistrationService } from './registration.service';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RegisterClassDto } from './dto/registerClass.dto';
import { Registration } from './registration.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('registration')
@UseGuards(AuthGuard())
export class RegistrationController {
    constructor(private registrationService: RegistrationService){}
    @Post('/')
    registerForClass(@Body() registerClassDto: RegisterClassDto): Promise<Registration> {
        return this.registrationService.registerForClass(registerClassDto);
    }

    @Get('/:id')
    confirmRegistration(@Param('id') registrationId: string): Promise<Registration> {
        return this.registrationService.confirmRegistration(registrationId);
    }
}
