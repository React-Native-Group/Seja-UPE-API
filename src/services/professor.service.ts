import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseNotFoundException } from "src/exceptions";
import { CourseModel, ProfessorModel } from "src/models";

@Injectable()
export class ProfessorService {

  constructor(
    
    @InjectRepository(CourseModel)
    private course: Repository<CourseModel>,

    @InjectRepository(ProfessorModel)
    private professor: Repository<ProfessorModel>

  ) {}

  async fetchProfessors(){
    return await this.professor.find();
  }

  async fetchProfessorById(professorId: number){
    return await this.professor.findOne({ id: professorId });
  }

  async fetchCourseProfessors(courseId: number){
    let course = await this.course.findOne({ id: courseId });
    if (!course)
      throw new CourseNotFoundException();
    return await this.professor.find({ course });
  }

}