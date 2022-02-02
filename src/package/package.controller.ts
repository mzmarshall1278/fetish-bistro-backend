import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageService } from './package.service';
import { CreatePackageDto } from './dto/createPackage.dto';
import { AddCommentDto } from './dto/addComment.dto';
import { UpdatePackageDto } from './dto/updatePackage.dto';

@Controller('package')
export class PackageController {
    constructor(
        private packageService: PackageService
    ){}

    @Get('/')
    getAllPackages(@Body() getPackageFilter: getPackageFilterDto):Promise<Package[]>{
        return this.packageService.getAllPackages(getPackageFilter)
    }

    @Get('/:id')
    getSinglePackage(@Param('id') id: string): Promise<Package>{
        return this.packageService.getSinglePackage(id)
    }

    @Post('/')
    addPackage(@Body() createPackageDto: CreatePackageDto): Promise<Package>{
        return this.packageService.createPackage(createPackageDto);
    }

    @Post('/:id')
    addComment(@Body() addCommentDto: AddCommentDto):Promise<Package> {
        return this.packageService.addComment(addCommentDto);
    }

    @Put('/:id')
    updatePackage(@Body() updatePackageDto: UpdatePackageDto): Promise<Package>{
        return this.packageService.updatePackage(updatePackageDto);
    }
}
