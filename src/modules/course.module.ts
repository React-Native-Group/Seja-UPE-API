import { Module } from '@nestjs/common';
import { CourseController } from 'src/controllers';
import { ServicesModule } from './services.module';

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [CourseController]
})
export class CourseModule {}
