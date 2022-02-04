import { Injectable } from '@nestjs/common';
import { FClassRepository } from './fclass.repository';

@Injectable()
export class FclassService {
    constructor(
        private fclsaaRepository: FClassRepository
    ){}

    async getAllClasses(){
        return this.fclsaaRepository.getAllClasses()
    }
}
