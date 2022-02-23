import Express, { Router } from "express";
import {
  adddata,
  updatedata,
  deletedata,
  getdata,
} from "../controller/todousercontroller";

const route = Express.Router();

route.post("/adddata", adddata);
route.put("/updatedata/:id", updatedata);
route.delete("/deletedata/:id", deletedata);
route.get("/getdata/:id", getdata);

export { route };
