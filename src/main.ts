import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';

import { AppModule } from './modules';
import { HttpExceptionFilter } from './filters';
import { ResponseInterceptor, TimeoutInterceptor, VersionInterceptor } from './hooks';

import Server from './config/server.json';
import Swagger from './docs/swagger.json';

declare const module: any;

function setupSwagger(app: INestApplication){
  const config = new DocumentBuilder()
    .setTitle(Swagger.title)
    .setDescription(Swagger.description)
    .setVersion(Swagger.version)
    .addBearerAuth()
    .addTag(Swagger.tag)
    .build();
  SwaggerModule.setup(Swagger.path, app, SwaggerModule.createDocument(app, config));
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   
  app.setGlobalPrefix(Server.globalPreffix);
  app.enableCors();
  
  app.useWebSocketAdapter(new WsAdapter(app));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    new ResponseInterceptor(), 
    new TimeoutInterceptor(), 
    new VersionInterceptor());

  setupSwagger(app);

  await app.listen(Server.port);
  
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
