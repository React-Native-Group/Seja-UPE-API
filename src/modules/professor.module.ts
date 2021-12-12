import { Module } from "@nestjs/common";
import { ProfessorController } from "src/controllers";
import { ServicesModule } from "./services.module";

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [ProfessorController]
})
export class ProfessorModule {}
