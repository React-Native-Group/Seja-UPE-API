import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { jwtSecretKey } from 'src/config/server.json';

import {
  AuthService,
  CourseService,
  EvaluationService,
  JwtStrategy,
  MailerService,
  OAuth2Service
} from 'src/services';

import {
  AuthorizationModel,
  CampusModel,
  ContactModel,
  CourseModel,
  EventModel,
  PopularityModel,
  ProfessorModel,
  RatingModel,
  SisuGradeModel,
  SocialModel,
  SsaGradeModel
} from 'src/models';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: jwtSecretKey
    }),
    TypeOrmModule.forFeature([
      AuthorizationModel, 
      CourseModel, CampusModel, 
      ProfessorModel, EventModel, 
      ContactModel, SocialModel, 
      SisuGradeModel, SsaGradeModel,
      RatingModel, PopularityModel
    ])
  ],
  providers: [
    MailerService, 
    AuthService, 
    CourseService, 
    JwtStrategy, 
    OAuth2Service,
    EvaluationService
  ],
  exports: [
    MailerService, 
    AuthService, 
    CourseService, 
    JwtStrategy, 
    OAuth2Service,
    EvaluationService
  ]
})
export class ServicesModule {}
