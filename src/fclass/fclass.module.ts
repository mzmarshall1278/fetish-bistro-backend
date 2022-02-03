import { Module } from '@nestjs/common';
import { FclassService } from './fclass.service';
import { FclassController } from './fclass.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FclassSchema } from './fclass.model';
import { FClassRepository } from './fclass.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'FClass', schema: FclassSchema}])
  ],
  providers: [FclassService, FClassRepository],
  controllers: [FclassController]
})
export class FclassModule {}
