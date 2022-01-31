import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PackageController } from './package.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { packageSchema } from './Package.model';
import { PackageRepository } from './Package.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Package', schema: packageSchema}])],
  providers: [PackageService, PackageRepository],
  controllers: [PackageController]
})
export class PackageModule {}
