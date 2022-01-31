import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { getPackageFilterDto } from "./dto/getFilter.dto";
import { Package } from "./Package.model";

@Injectable()
export class PackageRepository {
    constructor(
        @InjectModel('Package')
        private readonly Package: Model<Package>
    ){}

    async getAllPackages(etPackageFilter: getPackageFilterDto): Promise<Package[]>{
        return this.Package.aggregate([])
    }
}