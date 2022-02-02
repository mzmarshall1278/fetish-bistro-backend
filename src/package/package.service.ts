import { Injectable } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageRepository } from './Package.repository';
import { CreatePackageDto } from './dto/createPackage.dto';
import { AddCommentDto } from './dto/addComment.dto';
import { UpdatePackageDto } from './dto/updatePackage.dto';

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

        async addComment(addCommentDto: AddCommentDto): Promise<Package>{
            return this.packageRepository.addComment(addCommentDto);
        }

        async updatePackage(updatePackageDto: UpdatePackageDto): Promise<Package>{
            return this.packageRepository.updatePackage(updatePackageDto);
        }
}
