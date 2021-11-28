import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService, CourseService, JwtStrategy, MailerService, OAuth2Service } from 'src/services';
import { jwtSecretKey } from 'src/config/server.json';

import {
  AuthorizationModel,
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
    HttpModule,
    JwtModule.register({
      secret: jwtSecretKey
    }),
    TypeOrmModule.forFeature([
      AuthorizationModel, 
      CourseModel, CampusModel, 
      ProfessorModel, EventModel, 
      ContactModel, SocialModel, 
      SisuGradeModel, SsaGradeModel
    ])
  ],
  providers: [
    MailerService, 
    AuthService, 
    CourseService, 
    JwtStrategy, 
    OAuth2Service
  ],
  exports: [
    MailerService, 
    AuthService, 
    CourseService, 
    JwtStrategy, 
    OAuth2Service
  ]
})
export class ServicesModule {}
