import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [
    DatabaseModule,
    ServicesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
