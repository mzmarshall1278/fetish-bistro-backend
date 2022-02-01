import { Injectable } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageRepository } from './Package.repository';
import { CreatePackageDto } from './dto/createPackage.dto';

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

        async createPackage(createPackageDto: CreatePackageDto): Promise<Package>{
            return this.packageRepository.createPackage(createPackageDto);
        }
}
