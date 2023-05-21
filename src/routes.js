import { CreateUser } from "./controllers/CreateUser.js";
import { DeleteUser } from "./controllers/DeleteUser.js";
import { GetUsers } from "./controllers/GetUsers.js";
import { buildRoutePath } from "./utils/build-route-path.js";

export const routes = [
  {
    method: "GET",
    url: buildRoutePath("/users"),
    handler: GetUsers,
  },
  {
    method: "POST",
    url: buildRoutePath("/users"),
    handler: CreateUser,
  },
  {
    method: "DELETE",
    url: buildRoutePath("/users/:id"),
    handler: DeleteUser,
  },
];
