import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorizationModel, CampusModel, ContactModel, CourseModel, EventModel, PopularityModel, ProfessorModel, RatingModel, SisuGradeModel, SocialModel, SsaGradeModel } from "src/models";

@Module({
  imports: [
    TypeOrmModule.forRoot({  
      type: "sqlite",
      database: "./database/db.sqlite",
      synchronize: true,
      logging: true,
      entities: [
        CampusModel, ContactModel, 
        CourseModel, EventModel, 
        PopularityModel, ProfessorModel, 
        RatingModel, SisuGradeModel, 
        SocialModel, SsaGradeModel,
        AuthorizationModel
      ]
    })
  ]
})
export class DatabaseModule {}
