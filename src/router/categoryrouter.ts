import {
  insertdatatocategory,
  deletedatatocategory,
} from "../controller/categorycontroller";
import Express, { Router } from "express";

const categoryrouter = Express.Router();

categoryrouter.post("/insertdatatocategory/:id", insertdatatocategory);
categoryrouter.delete("/deletedatatocategory/:id", deletedatatocategory);

export { categoryrouter };
