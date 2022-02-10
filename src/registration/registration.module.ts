import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationSchema } from './registration.model';
import { RegistrationRepository } from './registration.repository';


@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Registration', schema: RegistrationSchema}])
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService, RegistrationRepository],
  exports: [RegistrationService]
})
export class RegistrationModule {}
