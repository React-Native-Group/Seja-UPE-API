import { Module } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { CampusModule } from './campus.module';
import { DatabaseModule } from './database.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [
    DatabaseModule,
    ServicesModule,
    AuthModule,
    CampusModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
