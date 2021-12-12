import { Module } from "@nestjs/common";
import { CampusController } from "src/controllers";
import { ServicesModule } from "./services.module";

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [CampusController]
})
export class CampusModule {}
