import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CampusModel, CourseModel, ProfessorModel } from "src/models";
import { CampusNotFoundException, CourseNotFoundException } from "src/exceptions";

@Injectable()
export class CourseService {

  constructor(

    @InjectRepository(CampusModel)
    private campus: Repository<CampusModel>,

    @InjectRepository(CourseModel)
    private course: Repository<CourseModel>,

    @InjectRepository(ProfessorModel)
    private professor: Repository<ProfessorModel>

  ){}

  async fetchCampus(relations: string[]){
    return await this.campus.find({ relations });
  }

  async fetchCourses(campusId: number){
    let campus = await this.campus.findOne({ id: campusId });
    if (!campus)
      throw new CampusNotFoundException();
    return await this.course.find({ campus });
  }

  async fetchProfessors(courseId: number){
    let course = await this.course.findOne({ id: courseId });
    if (!course)
      throw new CourseNotFoundException();
    return await this.professor.find({ course });
  }

}