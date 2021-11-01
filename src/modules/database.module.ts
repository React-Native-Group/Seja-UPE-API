import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({  
      type: "sqlite",
      database: "./database/db.sqlite",
      synchronize: true,
      logging: true,
      entities: []
    })
  ]
})
export class DatabaseModule {}
