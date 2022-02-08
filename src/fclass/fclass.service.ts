import { Injectable } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FClassRepository } from './fclass.repository';
import { CreateClassDto } from './dto/createClass.dto';

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
}
