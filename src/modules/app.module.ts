import { Module } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { CampusModule } from './campus.module';
import { ServicesModule } from './services.module';
import { DatabaseModule } from './database.module';
import { EvaluationModule } from './evaluation.module';

@Module({
  imports: [
    DatabaseModule,
    ServicesModule,
    AuthModule,
    CampusModule,
    EvaluationModule
  ]
})
export class AppModule {}
