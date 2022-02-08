import { RegistrationService } from './registration.service';
import { Controller } from '@nestjs/common';

@Controller('registration')
export class RegistrationController {
    constructor(private registrationService: RegistrationService){}
    
}
