import { Controller, Get } from '@nestjs/common';
import { Package } from './Package.model';
import { PackageService } from './package.service';

@Controller('package')
export class PackageController {
    constructor(
        private packageService: PackageService
    ){}

    @Get('/')
    getAllPackages():Promise<Package[]>{
        return this.packageService.getAllPackages()
    }
}
