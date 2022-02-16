import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { getPackageFilterDto } from './dto/getFilter.dto';
import { Package } from './Package.model';
import { PackageService } from './package.service';
import { CreatePackageDto } from './dto/createPackage.dto';
import { AddCommentDto } from './dto/addComment.dto';
import { UpdatePackageDto } from './dto/updatePackage.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/getUser.decorator';
import { User } from 'src/auth/user.model';

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
    addPackage(@Body() createPackageDto: CreatePackageDto, @GetUser() user: User): Promise<Package>{
        return this.packageService.createPackage(createPackageDto, user);
    }

    @Post('/:id')
    @UseGuards(AuthGuard())
    addComment(@Body() addCommentDto: AddCommentDto, @GetUser() user: User):Promise<Package> {
        return this.packageService.addComment(addCommentDto, user);
    }

    @Put('/:id')
    @UseGuards(AuthGuard())
    updatePackage(@Body() updatePackageDto: UpdatePackageDto, @GetUser() user: User): Promise<Package>{
        return this.packageService.updatePackage(updatePackageDto, user);
    }
}
