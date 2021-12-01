import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { CourseService } from "src/services";
import { CampusOptionsValidator } from "src/validators";
import { AuthorizeGuard, Permission, Permissions } from "src/security";
import { OasAppVersionHeader, OasBearerAuth, OasCampusIdParam, OasCampusOperation, OasControllerTags, OasCourseIdParam, OasCourseOperation, OasProfessorsOperation } from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Campus")
@UseGuards(AuthorizeGuard)
@Controller("campus")
export class CampusController {

  constructor(private courseService: CourseService){}

  @OasCampusOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @HttpCode(HttpStatus.OK)
  @Post()
  async onCampusRequested(@Body() options: CampusOptionsValidator)
  {
    return await this.courseService.fetchCampus(options.relations);
  }

  @OasCampusIdParam()
  @OasCourseOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId/course")
  async onCourseRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCourses(campusId);
  }

  @OasCourseIdParam()
  @OasProfessorsOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("all/course/:courseId/professors")
  async onProfessorsRequested(@Param('courseId', ParseIntPipe) courseId: number)
  {
    return await this.courseService.fetchProfessors(courseId);
  }

}