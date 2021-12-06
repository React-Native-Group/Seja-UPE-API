import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseNotFoundException } from "src/exceptions";
import { CourseModel, ProfessorModel } from "src/models";
import { MiningService } from ".";

@Injectable()
export class ProfessorService {

  constructor(
    
    @InjectRepository(CourseModel)
    private course: Repository<CourseModel>,

    @InjectRepository(ProfessorModel)
    private professor: Repository<ProfessorModel>,

    private miningService: MiningService

  ) {}

  async fetchProfessors(){
    let professors = await this.professor.find(); 
    for (let k = 0; k < professors.length; k++){
      professors[k].areas = this.miningService.getShortbioAreas(professors[k].shortbio);
    }
    return professors;
  }

  async fetchProfessorById(professorId: number){
    let professor = await this.professor.findOne({ id: professorId });
    professor.areas = this.miningService.getShortbioAreas(professor.shortbio);
    return professor;
  }

  async fetchCourseProfessors(courseId: number){
    let course = await this.course.findOne({ id: courseId });
    if (!course)
      throw new CourseNotFoundException();
    let professors = await this.professor.find({ course });
    for (let k = 0; k < professors.length; k++){
      professors[k].areas = this.miningService.getShortbioAreas(professors[k].shortbio);
    }
    return professors;
  }

}