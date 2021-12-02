import { Module } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { CampusModule } from './campus.module';
import { ServicesModule } from './services.module';
import { DatabaseModule } from './database.module';
import { WebsocketModule } from './websocket.module';
import { EvaluationModule } from './evaluation.module';
import { CourseModule } from './course.module';
import { ProfessorModule } from './professor.module';
import { SecurityModule } from './security.module';
import { FeaturesModule } from '.';

@Module({
  imports: [
    DatabaseModule,
    ServicesModule,
    AuthModule,
    CampusModule,
    EvaluationModule,
    WebsocketModule,
    ProfessorModule,
    CourseModule,
    SecurityModule,
    FeaturesModule
  ]
})
export class AppModule {}
