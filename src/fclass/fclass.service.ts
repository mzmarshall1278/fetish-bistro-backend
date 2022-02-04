import { Injectable } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FClassRepository } from './fclass.repository';

@Injectable()
export class FclassService {
    constructor(
        private fclsaaRepository: FClassRepository
    ){}

    async getAllClasses(): Promise<FClass[]> {
        return this.fclsaaRepository.getAllClasses()
    }
}
