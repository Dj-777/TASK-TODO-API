import { createConnection } from "typeorm";
import { todoapptable } from "./src/entitiy/todoapptable";
import { Category } from "./src/entitiy/Category";
createConnection({
  type: "mysql",
  host: "localhost",
  database: "todoapplication",
  username: "root",
  password: "password",
  logging: true,
  synchronize: true,
  entities: [todoapptable, Category],
});
export { createConnection };
