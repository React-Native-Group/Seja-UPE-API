import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CampusModel,
  ContactModel,
  CourseModel,
  EventModel,
  ProfessorModel,
  SisuGradeModel,
  SocialModel,
  SsaGradeModel
} from 'src/models';

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseModel])
  ],
  controllers: [
    CourseModel, CampusModel, 
    ProfessorModel, EventModel, 
    ContactModel, SocialModel, 
    SisuGradeModel, SsaGradeModel
  ]
})
export class CampusModule {}
