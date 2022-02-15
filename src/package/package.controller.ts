import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageService } from './package.service';
import { CreatePackageDto } from './dto/createPackage.dto';
import { AddCommentDto } from './dto/addComment.dto';
import { UpdatePackageDto } from './dto/updatePackage.dto';
import { AuthGuard } from '@nestjs/passport';

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
    @UseGuards(AuthGuard())
    addPackage(@Body() createPackageDto: CreatePackageDto): Promise<Package>{
        return this.packageService.createPackage(createPackageDto);
    }

    @Post('/:id')
    @UseGuards(AuthGuard())
    addComment(@Body() addCommentDto: AddCommentDto):Promise<Package> {
        return this.packageService.addComment(addCommentDto);
    }

    @Put('/:id')
    @UseGuards(AuthGuard())
    updatePackage(@Body() updatePackageDto: UpdatePackageDto): Promise<Package>{
        return this.packageService.updatePackage(updatePackageDto);
    }
}
