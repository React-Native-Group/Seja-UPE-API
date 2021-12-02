import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
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

  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("/rating/survey")
  async onRatingsRequested()
  {
    return await this.evaluationService.fetchRatings();
  }

  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("/popularity/course/:courseId")
  async onPopularityRequested(@Param('courseId', ParseIntPipe) courseId: number)
  {
    return await this.evaluationService.fetchPopularity(courseId);
  }

}