import { Injectable } from '@nestjs/common';
import { FClass } from './fclass.model';
import { FClassRepository } from './fclass.repository';
import { RegisterClassDto } from './dto/registerClass.dto';
import { UpdateWriteOpResult } from 'mongoose';
import { CreateClassDto } from './dto/createClass.dto';

@Injectable()
export class FclassService {
    constructor(
        private fclassRepository: FClassRepository
    ){}

    async getAllClasses(): Promise<FClass[]> {
        return this.fclassRepository.getAllClasses()
    }

    async registerForClass (registerDto: RegisterClassDto): Promise<UpdateWriteOpResult>{
        return this.fclassRepository.registerForClass(registerDto);
    }

    async createClass(createClassDto: CreateClassDto) {
        return this.fclassRepository.createClass(createClassDto);
    }
}
