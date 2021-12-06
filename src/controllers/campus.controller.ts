import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { AuthorizeGuard, Permission, Permissions } from "src/security";
import { CourseService } from "src/services";

import {
  OasAppVersionHeader,
  OasBearerAuth,
  OasCampusContactsOperation,
  OasCampusCourseOperation,
  OasCampusEventsOperation,
  OasCampusIdParam,
  OasCampusOperation,
  OasControllerTags
} from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Campus")
@UseGuards(AuthorizeGuard)
@Controller("campus")
export class CampusController {

  constructor(private courseService: CourseService){}

  @OasCampusOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("courses")
  async onAllCampusRequested()
  {
    return await this.courseService.fetchCampus();
  }

  @OasCampusOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get()
  async onAllCampusWithCoursesRequested()
  {
    return await this.courseService.fetchCampusWithCourses();
  }
  
  @OasCampusIdParam()
  @OasCampusOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId")
  async onCampusRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampus(campusId);
  }

  @OasCampusIdParam()
  @OasCampusCourseOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId/courses")
  async onCampusCoursesRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusCourses(campusId);
  }

  @OasCampusIdParam()
  @OasCampusEventsOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId/events")
  async onCampusEventsRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusEvents(campusId);
  }

  @OasCampusIdParam()
  @OasCampusContactsOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId/contacts")
  async onCampusContactsRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusContacts(campusId);
  }

}