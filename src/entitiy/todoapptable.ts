import { IsOptional } from "class-validator";
import { Category } from "./Category";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
enum Status {
  Backlog = "Backlog",
  InProgress = "InProgress",
  Done = "Done",
}
enum Categories {
  Home = "Home",
  Managmenet = "Managmenet",
  food = "food",
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

  @Column({ type: "enum", enum: Categories })
  Categories: Categories;

  // @OneToMany(() => Category, (categoriess) => categoriess.user)
  // category: Category[];
}
