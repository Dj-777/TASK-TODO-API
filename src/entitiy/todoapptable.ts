import { IsOptional } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
enum Status {
  Backlog = "Backlog",
  InProgress = "InProgress",
  Done = "Done",
}
@Entity()
export class todoapptable extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Title: string;

  @Column({ nullable: true })
  Description: string;

  @Column({ type: "datetime", default: () => "NOW()" })
  Date: Date;

  @Column({ type: "enum", enum: Status })
  Status: Status;
}
