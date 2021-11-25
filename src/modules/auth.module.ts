import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { JwtAuthProvider } from 'src/security';
import { AuthController } from 'src/controllers';
import { AuthService, JwtStrategy, OAuth2Service } from 'src/services';

import { jwtSecretKey } from 'src/config/server.json';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtSecretKey
    })
  ],
  providers: [
    OAuth2Service,
    AuthService,
    JwtStrategy, 
    JwtAuthProvider
  ],
  controllers: [AuthController]
})
export class AuthModule {}