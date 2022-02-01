import { Injectable } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageRepository } from './Package.repository';

@Injectable()
export class PackageService {
    constructor(
        private packageRepository: PackageRepository
    ){}

        async getAllPackages(etPackageFilter: getPackageFilterDto): Promise<Package[]>{
            return this.packageRepository.getAllPackages(etPackageFilter)
        }

        async getSinglePackage(id: string): Promise<Package> {
            return this.packageRepository.getSinglePackage(id)
        }
}
