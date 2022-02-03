import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PackageModule } from './package/package.module';
import { FclassModule } from './fclass/fclass.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/fetish'),
    PackageModule,
    FclassModule],
})
export class AppModule {}
