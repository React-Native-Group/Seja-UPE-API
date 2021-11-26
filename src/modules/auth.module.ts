import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorizationModel } from 'src/models';
import { AuthController } from 'src/controllers';
import { ServicesModule } from './services.module';

import { jwtSecretKey } from 'src/config/server.json';
import { JwtAuthProvider } from 'src/security';

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