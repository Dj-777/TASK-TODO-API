import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { todoapptable } from "./todoapptable";

@Entity("")
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  statuss: boolean;

  @OneToOne(() => todoapptable, (todoapptable) => todoapptable.id)
  @JoinColumn()
  task: todoapptable;
}
