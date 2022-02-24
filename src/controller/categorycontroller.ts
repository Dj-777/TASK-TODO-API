import { Category } from "../entitiy/Category";
import { getConnection } from "typeorm";
import { categoryrouter } from "../router/categoryrouter";

export const insertdatatocategory = async (req: any, res: any) => {
  const { id } = req.params;
  const { name, statuss } = req.body;
  //   const insertdatatocategorybyorm = Category.create({
  //     name: name,
  //     statuss: statuss,
  //   });
  //   await insertdatatocategorybyorm.save();
  
  const insertdatatocategorybyorm = await getConnection()
    .createQueryBuilder()
    .select("taskId")
    .from(Category, "taskId")
    .where("taskId.id=:id", { id: id })
    .insert()
    .into(Category)
    .values([{ name: name, statuss: statuss, task: id }])
    .execute(); 

  return res.json(insertdatatocategorybyorm);
};

//deletedata
export const deletedatatocategory = async (req: any, res: any) => {
  const { id } = req.params;
  const deletedataorm = await Category.delete({ id });
  return res.json(deletedataorm);
};
