import { Category } from "../entitiy/Category";
import { todoapptable, Categories } from "../entitiy/todoapptable";
import { Any, createQueryBuilder, getConnection } from "typeorm";
import { categoryrouter } from "../router/categoryrouter";
import { getdata } from "./todousercontroller";
import { on } from "events";
import { Console } from "console";
import { homedir, userInfo } from "os";

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

  const user: any = await Category.findOne(id);
  console.log("user", user);

  // const getdatatocategorybyorm: any = await getConnection()
  //   .createQueryBuilder()
  //   .select(["todoapptable"])
  //   .from(todoapptable, "todoapptable")
  //   .where("todoapptable.id=:id", { id: id })
  //   .innerJoinAndSelect(Category, "category")
  //   .andWhere("category.taskId=:taskId", { taskId: taskidd })
  //   .execute();

  const getdatatocategorybyorm = await todoapptable.findOne({
    where: { id: id },
  });
  console.log("getdata", getdatatocategorybyorm);

  console.log(getdatatocategorybyorm?.Categories);
  // const { updates, getdatatocategorybyorm: any } = req.body;
  // console.log("data", updates, getdatatocategorybyorm);

  // const updates = getdatatocategorybyorm;
  // console.log(updates);
  if (
    getdatatocategorybyorm?.Categories === Categories.Home ||
    getdatatocategorybyorm?.Categories === Categories.Managmenet ||
    getdatatocategorybyorm?.Categories === Categories.food
  ) {
    user.statuss = "have";
  } else {
    user.statuss = "not have";
  }
  await user.save();
};

export const updatestatus = async (req: any, res: any) => {
  const { id, taskId } = req.params;

  const taskidd = taskId;
  const user: any = await Category.findOne({ where: { task: taskidd } });
  const getdatatocategorybyorm = await getConnection()
    .createQueryBuilder()
    .select(["todoapptable"])
    .from(todoapptable, "todoapptable")
    .where("todoapptable.id=:id", { id: id })
    .innerJoinAndSelect(Category, "category")
    .andWhere("category.taskId=:taskId", { taskId: taskidd })
    .execute();

  const updates: any = getdatatocategorybyorm[0];
  console.log(updates);
  // let homecate: Categories = Categories.Home;
  // let managcate: Categories = Categories.Managmenet;
  // let foodcate: Categories = Categories.food;

  //  const a: any = typeof user;

  // const check: any =
  //   Categories[homecate] === Categories[Categories.Home] ||
  //   Categories[managcate] === Categories[Categories.Managmenet] ||
  //   Categories[foodcate] === Categories[Categories.food];

  if (
    updates.todoapptable_Categories === Categories.Home ||
    updates.todoapptable_Categories === Categories.Managmenet ||
    updates.todoapptable_Categories === Categories.food
  ) {
    // const user: any = await getConnection()
    //   .createQueryBui    lder()
    //   .update(Category)
    //   .set({ statuss: "Have" })
    //   .where({ task: taskidd })
    //   .execute();
    // await user.save();
    user.statuss = "have";
  } else {
    // const users: any = await getConnection()
    //   .createQueryBuilder()
    //   .update(Category)
    //   .set({ statuss: "Not have" })
    //   .where({ task: taskidd })
    //   .execute();
    // await users.save();
    user.statuss = "not have";
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
