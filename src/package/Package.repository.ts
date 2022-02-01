import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { getPackageFilterDto } from "./dto/getFilter.dto";
import { Package } from "./Package.model";
import { CreatePackageDto } from './dto/createPackage.dto';
import { AddCommentDto } from './dto/addComment.dto';

@Injectable()
export class PackageRepository {
    constructor(
        @InjectModel('Package')
        private readonly Package: Model<Package>
    ){}

    async getAllPackages(etPackageFilter: getPackageFilterDto): Promise<Package[]>{
        return this.Package.aggregate([])
    }

    async getSinglePackage (id: string): Promise<Package> {
        const found = await this.Package.findById(id);
        if(!found) throw new NotFoundException('The package could not be found');
        return found;
    }

    async createPackage(createPackageDto: CreatePackageDto): Promise<Package>{
        const {name, price, description, available, imageUrl, quantity} = createPackageDto;
        const savedPackage = await new this.Package({
            name, price, description, available, imageUrl, quantity
        }).save();
        return savedPackage;
    }

    async addComment(addCommentDto: AddCommentDto): Promise<Package>{
        const {userName, packageId, rating, comment} = addCommentDto;

        const commentToSave = {username: userName, rating, comment}
        return this.Package.findOneAndUpdate({packageId}, {$push: {comments: commentToSave}})
    }
}