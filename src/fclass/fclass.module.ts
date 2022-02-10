import { Module } from '@nestjs/common';
import { FclassService } from './fclass.service';
import { FclassController } from './fclass.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FclassSchema } from './fclass.model';
import { FClassRepository } from './fclass.repository';
import { RegistrationModule } from '../registration/registration.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'FClass', schema: FclassSchema}]),
    RegistrationModule
  ],
  providers: [FclassService, FClassRepository],
  controllers: [FclassController]
})
export class FclassModule {}
