import { IsInt, IsOptional, validate } from "class-validator";
import { OasCreatedAtProperty, OasUpdatedAtProperty } from "src/docs/decorators";
import { InvalidObjectException } from "src/exceptions";
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

export class BaseModel extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  public id: number;

  @OasCreatedAtProperty()
  @IsInt()
  @Column()
  public createdAt: number = +new Date;

  @OasUpdatedAtProperty()
  @IsOptional()
  @IsInt()
  @Column({ nullable: true })
  public updatedAt?: number = null;

  @BeforeInsert()
  @BeforeUpdate()
  async validate(){
    let errors = await validate(this);
    if (errors.length > 0)
      throw new InvalidObjectException(errors);
  }

  @BeforeUpdate()
  async update(){
    this.updatedAt = +new Date;
  }
  
}