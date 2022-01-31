import { Module } from '@nestjs/common';
import { PackageModule } from './package/package.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PackageModule, UsersModule],
})
export class AppModule {}
