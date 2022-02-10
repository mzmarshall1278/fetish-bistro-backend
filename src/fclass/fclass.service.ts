import { Injectable } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FClassRepository } from './fclass.repository';
import { CreateClassDto } from './dto/createClass.dto';
import { Registration } from 'src/registration/registration.model';

@Injectable()
export class FclassService {
    constructor(
        private fclassRepository: FClassRepository
    ){}

    async getAllClasses(): Promise<FClass[]> {
        return this.fclassRepository.getAllClasses()
    }

    async createClass(createClassDto: CreateClassDto): Promise<FClass>{
        return this.fclassRepository.createClass(createClassDto);
    }

    async closeFclassRegistration (id: string): Promise<FClass> {
        return this.fclassRepository.closeFclassRegistration(id)
    }

    async getAllFclassRegistrations(id: string): Promise<Registration[]> {
        return this.fclassRepository.getAllFclassRegistrations(id);
    }
}
