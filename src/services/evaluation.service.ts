import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { PopularityValidator } from "src/validators";
import { CourseNotFoundException } from "src/exceptions";
import { CourseModel, PopularityModel, RatingModel } from "src/models";

@Injectable()
export class EvaluationService {

  constructor(

    @InjectRepository(CourseModel)
    private courses: Repository<CourseModel>,

    @InjectRepository(RatingModel) 
    private rating: Repository<RatingModel>,

    @InjectRepository(PopularityModel)
    private popularity: Repository<PopularityModel>
  
  ){}

  async submitRating(note: number){
    let rate = await this.rating.create({ note });
    return await this.rating.save(rate);
  }
  
  async submitCoursePopularity({ courseId, value }: PopularityValidator){
    let course = await this.courses.findOne({ id: courseId });

    if (!course)
      throw new CourseNotFoundException();
    
    let rate = await this.popularity.create({ course, value });
    
    return await this.popularity.save(rate);
  }

}
