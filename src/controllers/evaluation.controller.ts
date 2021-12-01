import { Body, Controller, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { EvaluationService } from "src/services";
import { PopularityValidator } from "src/validators";
import { AuthorizeGuard, Permission, Permissions } from "src/security";
import { OasAppVersionHeader, OasBearerAuth, OasControllerTags, OasPopularityOperation, OasRatingNoteParam, OasRatingOperation } from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Avaliações")
@UseGuards(AuthorizeGuard)
@Controller("evaluation")
export class EvaluationController {

  constructor(private evaluationService: EvaluationService){}

  @OasRatingNoteParam()
  @OasRatingOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Post("/rating/survey/:note")
  async onRatingSent(@Param('note', ParseIntPipe) note: number)
  {
    return await this.evaluationService.submitRating(note);
  }

  @OasPopularityOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Post("popularity/course")
  async onPopularitySent(@Body() data: PopularityValidator)
  {
    return await this.evaluationService.submitCoursePopularity(data);
  }

}