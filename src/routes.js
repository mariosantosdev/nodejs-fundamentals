import { CreateUser } from "./controllers/CreateUser.js";
import { GetUsers } from "./controllers/GetUsers.js";

export const routes = [
  {
    method: "GET",
    url: "/users",
    handler: GetUsers,
  },
  {
    method: "POST",
    url: "/users",
    handler: CreateUser,
  },
];
