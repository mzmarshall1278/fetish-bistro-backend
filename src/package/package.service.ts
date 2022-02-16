import { Injectable } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageRepository } from './Package.repository';
import { CreatePackageDto } from './dto/createPackage.dto';
import { AddCommentDto } from './dto/addComment.dto';
import { UpdatePackageDto } from './dto/updatePackage.dto';
import { User } from 'src/auth/user.model';

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

        async createPackage(createPackageDto: CreatePackageDto, user: User): Promise<Package>{
            return this.packageRepository.createPackage(createPackageDto, user);
        }

        async addComment(addCommentDto: AddCommentDto, user: User): Promise<Package>{
            return this.packageRepository.addComment(addCommentDto, user);
        }

        async updatePackage(updatePackageDto: UpdatePackageDto, user: User): Promise<Package>{
            return this.packageRepository.updatePackage(updatePackageDto, user);
        }
}
