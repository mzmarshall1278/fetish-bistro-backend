import { Body, Controller, Get, Param } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageService } from './package.service';

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
}
