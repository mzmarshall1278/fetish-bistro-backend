import { RegistrationService } from './registration.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterClassDto } from './dto/registerClass.dto';
import { Registration } from './registration.model';

@Controller('registration')
export class RegistrationController {
    constructor(private registrationService: RegistrationService){}
    @Post('/')
    registerForClass(@Body() registerClassDto: RegisterClassDto): Promise<Registration> {
        return this.registrationService.registerForClass(registerClassDto);
    }

    confirmRegistration(@Param() registrationId: string): Promise<Registration> {
        return this.registrationService.confirmRegistration(registrationId);
    }
}
