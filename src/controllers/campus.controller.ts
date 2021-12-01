import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { OasAppVersionHeader, OasCampusOperation } from "src/docs/decorators";
import { AuthorizeGuard, Permission, Permissions } from "src/security";
import { CourseService } from "src/services";
import { CampusOptionsValidator } from "src/validators";

@OasAppVersionHeader()
@ApiBearerAuth()
@ApiTags("Campus")
@UseGuards(AuthorizeGuard)
@Controller("campus")
export class CampusController {

  constructor(
    private courseService: CourseService){}

  @OasCampusOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Post()
  async onCampusRequested(@Body() options: CampusOptionsValidator){
    return await this.courseService.fetchCampus(options.relations);
  }

  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId/course")
  async onCourseRequested(@Param('campusId', ParseIntPipe) campusId: number){
    return await this.courseService.fetchCourses(campusId);
  }

  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("all/course/:courseId/professors")
  async onProfessorsRequested(@Param('courseId', ParseIntPipe) courseId: number){
    return await this.courseService.fetchProfessors(courseId);
  }

}