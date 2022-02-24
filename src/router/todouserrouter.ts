import Express, { Router } from "express";
import {
  adddata,
  updatedata,
  deletedata,
  getdata,
  updatedataparticullar,
} from "../controller/todousercontroller";

const route = Express.Router();

route.post("/adddata", adddata);
route.put("/updatedata/:id", updatedata);
route.delete("/deletedata/:id", deletedata);
route.get("/getdata/:id", getdata);
route.patch("/updatedataparticullar/:id", updatedataparticullar);

export { route };
