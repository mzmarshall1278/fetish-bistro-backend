import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PackageModule } from './package/package.module';
import { FclassModule } from './fclass/fclass.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/fetish'),
    PackageModule,
    FclassModule,
    AuthModule,
    OrderModule,
    RegistrationModule],
})
export class AppModule {}
