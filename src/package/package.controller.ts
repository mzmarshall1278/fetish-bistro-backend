import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageService } from './package.service';
import { CreatePackageDto } from './dto/createPackage.dto';

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
}
