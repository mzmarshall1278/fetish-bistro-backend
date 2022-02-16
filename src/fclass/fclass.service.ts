import { Injectable } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FClassRepository } from './fclass.repository';
import { CreateClassDto } from './dto/createClass.dto';
import { Registration } from 'src/registration/registration.model';
import { User } from 'src/auth/user.model';

@Injectable()
export class FclassService {
    constructor(
        private fclassRepository: FClassRepository
    ){}

    async getAllClasses(): Promise<FClass[]> {
        return this.fclassRepository.getAllClasses()
    }

    async createClass(createClassDto: CreateClassDto, user: User): Promise<FClass>{
        return this.fclassRepository.createClass(createClassDto, user);
    }

    async closeFclassRegistration (id: string, user: User): Promise<FClass> {
        return this.fclassRepository.closeFclassRegistration(id, user)
    }

    async getAllFclassRegistrations(id: string): Promise<Registration[]> {
        return this.fclassRepository.getAllFclassRegistrations(id);
    }
}
