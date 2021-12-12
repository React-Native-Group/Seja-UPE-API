import { CacheModule, Module } from "@nestjs/common";
import { CacheInterceptorProvider } from "src/hooks";

import { AuthModule } from "./auth.module";
import { CampusModule } from "./campus.module";
import { ServicesModule } from "./services.module";
import { DatabaseModule } from "./database.module";
import { WebsocketModule } from "./websocket.module";
import { EvaluationModule } from "./evaluation.module";
import { CourseModule } from "./course.module";
import { ProfessorModule } from "./professor.module";

@Module({
  imports: [
    CacheModule.register({
      ttl: 7200, //Tempo de vida de 7200 segundos do Cache.
      isGlobal: true
    }),
    DatabaseModule,
    ServicesModule,
    AuthModule,
    CampusModule,
    EvaluationModule,
    WebsocketModule,
    ProfessorModule,
    CourseModule
  ],
  providers: [
    CacheInterceptorProvider
  ]
})
export class AppModule {}
