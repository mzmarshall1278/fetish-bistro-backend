import { Injectable } from '@nestjs/common';
import { Package } from './Package.model';
import { PackageRepository } from './Package.repository';

@Injectable()
export class PackageService {
    constructor(
        private packageRepository: PackageRepository
    ){}

        async getAllPackages(): Promise<Package[]>{
            return this.packageRepository.getAllPackages()
        }
}
