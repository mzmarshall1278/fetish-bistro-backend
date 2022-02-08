import { Injectable } from '@nestjs/common';
import { RegistrationRepository } from './registration.repository';
import { RegisterClassDto } from './dto/registerClass.dto';
import { Registration } from './registration.model';

@Injectable()
export class RegistrationService {
    constructor (private registrationRepository: RegistrationRepository){}

    async registerForClass(registerClass: RegisterClassDto): Promise<Registration> {
        return this.registrationRepository.registerForClass(registerClass);
    }

    async confirmRegistration(registrationId: string): Promise<Registration>{
        return this.registrationRepository.confirmRegistration(registrationId);
    }
}
