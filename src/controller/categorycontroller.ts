import { Category } from "../entitiy/Category";
import { todoapptable, Categories } from "../entitiy/todoapptable";
import { Any, createQueryBuilder, getConnection } from "typeorm";
import { categoryrouter } from "../router/categoryrouter";
import { getdata } from "./todousercontroller";
import { on } from "events";
import { Console } from "console";

export const insertdatatocategory = async (req: any, res: any) => {
  const { id, taskId } = req.params;
  const { name } = req.body;
  createQueryBuilder()
    .select("taskId")
    .from(Category, "taskId")
    .where("taskId.id=:id", { id: id })
    .insert()
    .into(Category)
    .values([{ name: name, task: id }])
    .execute();
  const { updates } = req.body;
};

export const updatestatus = async (req: any, res: any) => {
  const { id, taskId } = req.params;

  console.log(id);

  const getdatatocategorybyorm = await getConnection()
    .createQueryBuilder()
    .select(["todoapptable.id", "todoapptable.Categories"])
    .from(todoapptable, "todoapptable")
    .where("todoapptable.id=:id", { id: id })
    .innerJoinAndSelect(Category, "Category")
    .andWhere("Category.taskId=:taskId", { taskId: taskId })
    .execute();

  const user = await Category.findOne(taskId);
  console.log(user);

  const update: any = getdatatocategorybyorm;

  if (update === Categories.Home || update === Categories.Managmenet) {
    user.statuss = "have";
  } else {
    user.statuss = "Not have";
  }
  await user.save();
};

//getdata
export const categorygetdata = async (req: any, res: any) => {
  const jointables = await getConnection();
  createQueryBuilder()
    // .select(["todoapptable.id"])
    // .from(todoapptable, "id")
    //.leftJoinAndSelect(Category, "TaskId")
    .select(["todoapptable.id", "todoapptable.Categories"])
    .from(todoapptable, "todoapptable")
    .where("todoapptable.id=:id", { id: 1 })
    .innerJoinAndSelect(Category, "Category")
    .andWhere("Category.TaskId=:TaskId", { TaskId: 1 })
    .getOne();
};

//deletedata
export const deletedatatocategory = async (req: any, res: any) => {
  const { id } = req.params;
  const deletedataorm = await Category.delete({ id });
  return res.json(deletedataorm);
};
