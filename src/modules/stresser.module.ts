import { Module } from "@nestjs/common";
import { StresserController } from "src/controllers";

@Module({
  controllers: [StresserController]
})
export class StresserModule {}
