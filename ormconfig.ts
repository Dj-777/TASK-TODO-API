import { createConnection } from "typeorm";
import { todoapptable } from "./src/entitiy/todoapptable";
createConnection({
  type: "mysql",
  host: "localhost",
  database: "todoapplication",
  username: "root",
  password: "password",
  logging: true,
  synchronize: true,
  entities: [todoapptable],
});
export { createConnection };
