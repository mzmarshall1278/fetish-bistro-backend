import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { getPackageFilterDto } from "./dto/getFilter.dto";
import { Package } from "./Package.model";
import { CreatePackageDto } from './dto/createPackage.dto';
import { AddCommentDto } from './dto/addComment.dto';
import { UpdatePackageDto } from './dto/updatePackage.dto';
import { User } from "src/auth/user.model";

@Injectable()
export class PackageRepository {
    constructor(
        @InjectModel('Package')
        private readonly Package: Model<Package>
    ){}

    async getAllPackages(getPackageFilter: getPackageFilterDto): Promise<Package[]>{
        return this.Package.aggregate([])
    }

    async getSinglePackage (id: string): Promise<Package> {
        const found = await this.Package.findById(id);
        if(!found) throw new NotFoundException('The package could not be found');
        return found;
    }

    async createPackage(createPackageDto: CreatePackageDto, user: User): Promise<Package>{
        if(user.UserType !== 'Admin') throw new UnauthorizedException('Not AUthorized');
        const {name, price, description, available, imageUrl, quantity} = createPackageDto;
        const savedPackage = await new this.Package({
            name, price, description, available, imageUrl, quantity
        }).save();
        return savedPackage;
    }

    async addComment(addCommentDto: AddCommentDto, user: User): Promise<Package>{
        const {userName, packageId, rating, comment,} = addCommentDto;

        const commentToSave = {username: userName, rating, comment, userId: user.id}
        return this.Package.findOneAndUpdate({id: packageId}, {$push: {comments: commentToSave}})
    }

    async updatePackage(updatePackageDto: UpdatePackageDto, user: User): Promise<Package>{
        if(user.UserType !== 'Admin') throw new UnauthorizedException('Not AUthorized');
        const {id, name, description, imageUrl, available} = updatePackageDto

        let updatedPackage;

        return this.Package.findOneAndUpdate({id}, {$set: {name, description, imageUrl, available}});
    }
}