import { Injectable } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FClassRepository } from './fclass.repository';
import { RegisterClassDto } from './dto/registerClass.dto';
import { UpdateWriteOpResult } from 'mongoose';

@Injectable()
export class FclassService {
    constructor(
        private fclsaaRepository: FClassRepository
    ){}

    async getAllClasses(): Promise<FClass[]> {
        return this.fclsaaRepository.getAllClasses()
    }

    async registerForClass (registerDto: RegisterClassDto): Promise<UpdateWriteOpResult>{
        return this.fclsaaRepository.registerForClass(registerDto);
    }
}
