import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CampusModel, ContactModel, CourseModel, EventModel, ProfessorModel, SocialModel } from "src/models";
import { CampusNotFoundException, CourseNotFoundException } from "src/exceptions";

@Injectable()
export class CourseService {

  constructor(

    @InjectRepository(CampusModel)
    private campus: Repository<CampusModel>,

    @InjectRepository(CourseModel)
    private course: Repository<CourseModel>,

    @InjectRepository(EventModel)
    private event: Repository<EventModel>,

    @InjectRepository(ContactModel)
    private contact: Repository<ContactModel>,

    @InjectRepository(SocialModel)
    private social: Repository<SocialModel>

  ){}

  async fetchCourses(){
    return await this.course.find({ relations: ['professors', 'ssaGrades', 'sisuGrades'] });
  }

  async fetchCampus(campusId?: number){
    const relations = ['events', 'contacts', 'socialNetworks'];
    if (!campusId)
      return await this.campus.find({ relations });
    return await this.campus.find({ where: { id: campusId }, relations });
  }

  async fetchCampusWithCourses(){
    let allCampus = await this.fetchCampus();
    for (let k = 0; k < allCampus.length; k++){
      allCampus[k].courses = await this.fetchCampusCourses(allCampus[k].id, false);
    }
    return allCampus;
  }

  async fetchCampusCourses(campusId: number, includeProfessors: boolean = true){
    let campus = await this.campus.findOne({ id: campusId });
    if (!campus)
      throw new CampusNotFoundException();
    let relations = ['ssaGrades', 'sisuGrades'];
    if (includeProfessors)
      relations.push('professors');
    return await this.course.find({ where: {campus}, relations });
  }

  async fetchCampusEvents(campusId: number){
    let campus = await this.campus.findOne({ id: campusId });
    if (!campus)
      throw new CampusNotFoundException();
    return await this.event.find({ where: {campus} });
  }

  async fetchCampusContacts(campusId: number){
    let campus = await this.campus.findOne({ id: campusId });
    if (!campus)
      throw new CampusNotFoundException();
    return await this.contact.find({ where: {campus} });
  }

  async fetchCampusSocialNetworks(campusId: number){
    let campus = await this.campus.findOne({ id: campusId });
    if (!campus)
      throw new CampusNotFoundException();
    return await this.social.find({ where: {campus} });
  }

}