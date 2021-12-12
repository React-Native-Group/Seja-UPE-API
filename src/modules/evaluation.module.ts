import { Module } from "@nestjs/common";
import { EvaluationController } from "src/controllers";
import { ServicesModule } from "./services.module";

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [EvaluationController]
})
export class EvaluationModule {}
