import {
  insertdatatocategory,
  deletedatatocategory,
  categorygetdata,
  updatestatus,
} from "../controller/categorycontroller";
import Express, { Router } from "express";

const categoryrouter = Express.Router();

categoryrouter.post("/insertdatatocategory/:id/", insertdatatocategory);
categoryrouter.post("/updatestatus/:id/:taskId", updatestatus);
categoryrouter.delete("/deletedatatocategory/:id", deletedatatocategory);
categoryrouter.get("/getcategorydata", categorygetdata);
export { categoryrouter };
