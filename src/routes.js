import { CreateUser } from "./controllers/CreateUser.js";
import { DeleteUser } from "./controllers/DeleteUser.js";
import { GetUsers } from "./controllers/GetUsers.js";
import { UpdateUser } from "./controllers/UpdateUser.js";
import { Database } from "./db.js";

const database = new Database();
import { buildRoutePath } from "./utils/build-route-path.js";

export const routes = [
  {
    method: "GET",
    url: buildRoutePath("/users"),
    handler: (req, res) => GetUsers(req, res, database),
  },
  {
    method: "POST",
    url: buildRoutePath("/users"),
    handler: (req, res) => CreateUser(req, res, database),
  },
  {
    method: "PUT",
    url: buildRoutePath("/users/:id"),
    handler: (req, res) => UpdateUser(req, res, database),
  },
  {
    method: "DELETE",
    url: buildRoutePath("/users/:id"),
    handler: (req, res) => DeleteUser(req, res, database),
  },
];
