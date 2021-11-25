import { ApiProperty } from "@nestjs/swagger";
import { IsInt, validate } from "class-validator";
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

  @ApiProperty()
  @Column()
  @IsInt()
  public createdAt: number = +new Date;

  @ApiProperty()
  @Column({ nullable: true })
  @IsInt()
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