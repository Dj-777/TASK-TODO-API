import { getConnection } from "typeorm";
import { todoapptable } from "../entitiy/todoapptable";

//insertdata
export const adddata = async (req: any, res: any) => {
  const { Title, Description, Date, Status } = req.body;
  const addata = todoapptable.create({
    Title: Title,
    Description: Description,
    Date: Date,
    Status: Status,
  });
  await addata.save();
  return res.json(addata);
};

//updatedata
export const updatedata = async (req: any, res: any) => {
  const { id } = req.params;
  const { Title, Description, Status, Date } = req.body;
  const updatedatabyorm = await getConnection()
    .createQueryBuilder()
    .update(todoapptable)
    .set({
      Title: Title,
      Description: Description,
      Status: Status,
      Date: Date,
    })
    .where("id=:id", { id: id })
    .execute();
  return res.json(updatedatabyorm);
};

//getdata
export const getdata = async (req: any, res: any) => {
  const { id } = req.params;
  const todoaptables = await getConnection()
    .getRepository(todoapptable)
    .createQueryBuilder("todoaptable")
    .where("todoaptable.id=:id", { id: id })
    .getOne();

  console.log(todoaptables);
};

//deletedata
export const deletedata = async (req: any, res: any) => {
  const { id } = req.params;
  const deletedataorm = await todoapptable.delete({ id });
  return res.json(deletedataorm);
};
