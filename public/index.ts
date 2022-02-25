import "reflect-metadata";
import Express from "express";
import { createConnection } from "../ormconfig";
import { route } from "../src/router/todouserrouter";
import { categoryrouter } from "../src/router/categoryrouter";
import { Server } from "http";
const app = Express();
app.use(Express.json());
app.use(route, categoryrouter);
//app.use(categoryrouter);
app.listen(4000, () => console.log("server is running on port 4000"));

if (!createConnection) {
  console.log("database not connected");
} else {
  console.log("database is connected");
}
