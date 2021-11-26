import { Module } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { DatabaseModule } from './database.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [
    DatabaseModule,
    ServicesModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
