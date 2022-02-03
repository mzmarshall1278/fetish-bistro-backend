import { Module } from '@nestjs/common';
import { FclassService } from './fclass.service';
import { FclassController } from './fclass.controller';

@Module({
  providers: [FclassService],
  controllers: [FclassController]
})
export class FclassModule {}
