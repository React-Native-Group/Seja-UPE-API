import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { AuthorizeGuard, Permission, Permissions } from "src/security";
import { CourseService } from "src/services";

import {
  OasAppVersionHeader,
  OasBearerAuth,
  OasCampusContactsOperation,
  OasCampusContactsResponse,
  OasCampusCourseOperation,
  OasCampusCourseResponse,
  OasCampusCoursesOperation,
  OasCampusCoursesResponse,
  OasCampusEventsOperation,
  OasCampusEventsResponse,
  OasCampusIdParam,
  OasCampusOperation,
  OasCampusResponse,
  OasControllerTags,
  OasInvalidObjectResponse,
  OasSingleCampusResponse
} from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Campus")
@UseGuards(AuthorizeGuard)
@Controller("campus")
export class CampusController {

  constructor(private courseService: CourseService){}

  @OasCampusOperation()
  @OasInvalidObjectResponse()
  @OasCampusResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get()
  async onAllCampusRequested()
  {
    return await this.courseService.fetchCampus();
  }

  @OasCampusCoursesOperation()
  @OasInvalidObjectResponse()
  @OasCampusCoursesResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("courses")
  async onAllCampusWithCoursesRequested()
  {
    return await this.courseService.fetchCampusWithCourses();
  }
  
  @OasCampusIdParam()
  @OasCampusOperation()
  @OasInvalidObjectResponse()
  @OasSingleCampusResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId")
  async onCampusRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampus(campusId);
  }

  @OasCampusIdParam()
  @OasCampusCourseOperation()
  @OasInvalidObjectResponse()
  @OasCampusCourseResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId/courses")
  async onCampusCoursesRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusCourses(campusId);
  }

  @OasCampusIdParam()
  @OasCampusEventsOperation()
  @OasInvalidObjectResponse()
  @OasCampusEventsResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId/events")
  async onCampusEventsRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusEvents(campusId);
  }

  @OasCampusIdParam()
  @OasCampusContactsOperation()
  @OasInvalidObjectResponse()
  @OasCampusContactsResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":campusId/contacts")
  async onCampusContactsRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusContacts(campusId);
  }

}