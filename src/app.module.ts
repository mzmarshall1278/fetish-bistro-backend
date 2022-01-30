import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from './package/package.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PackageModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
