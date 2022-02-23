import "reflect-metadata";
import Express from "express";
import { createConnection } from "../ormconfig";
import { route } from "../src/router/todouserrouter";
const app = Express();
app.use(Express.json());
app.use(route);
app.listen(4000, () => console.log("server is running on port 4000"));

if (!createConnection) {
  console.log("database not connected");
} else {
  console.log("database is connected");
}
