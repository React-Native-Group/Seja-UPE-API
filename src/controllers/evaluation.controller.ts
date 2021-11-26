import { Controller, Post } from "@nestjs/common";

@Controller('evaluation')
export class EvaluationController {

  @Post("/rating")
  onRatingSent(){}

  @Post("popularity/:courseId")
  onPopularitySent(){}

}