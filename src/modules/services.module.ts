import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthorizationModel } from 'src/models';
import { AuthService, CourseService, JwtStrategy, MailerService, OAuth2Service } from 'src/services';
import { jwtSecretKey } from 'src/config/server.json';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtSecretKey
    }),
    TypeOrmModule.forFeature([AuthorizationModel]),
    HttpModule
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
