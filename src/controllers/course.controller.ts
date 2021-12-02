import { Controller, Get, Param, ParseIntPipe, UseGuards, UseInterceptors } from "@nestjs/common";
import { CourseService } from "src/services";
import { AuthorizeGuard, Permission, Permissions } from "src/security";

import {
  OasAppVersionHeader,
  OasBearerAuth,
  OasCampusIdParam,
  OasControllerTags,
  OasCourseIdParam,
  OasCourseOperation,
  OasProfessorsOperation
} from "src/docs/decorators";
import { CacheRequestInterceptor } from "src/hooks";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Cursos")
@UseInterceptors(CacheRequestInterceptor)
@UseGuards(AuthorizeGuard)
@Controller("courses")
export class CourseController {

  constructor(private courseService: CourseService){}

  @OasCampusIdParam()
  @OasCourseOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("campus/:campusId")
  async onCourseRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusCourses(campusId);
  }

  @OasCourseIdParam()
  @OasProfessorsOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":courseId/professors")
  async onProfessorsRequested(@Param('courseId', ParseIntPipe) courseId: number)
  {
    return await this.courseService.fetchCourseProfessors(courseId);
  }

}