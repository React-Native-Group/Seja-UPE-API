import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtAuthProvider } from 'src/security';
import { AuthorizationModel } from 'src/models';
import { AuthController } from 'src/controllers';
import { ServicesModule } from './services.module';

import { jwtSecretKey } from 'src/config/server.json';

@Module({
  imports: [
    ServicesModule,
    TypeOrmModule.forFeature([AuthorizationModel]),
    JwtModule.register({
      secret: jwtSecretKey
    })
  ],
  providers: [JwtAuthProvider],
  controllers: [AuthController]
})
export class AuthModule {}