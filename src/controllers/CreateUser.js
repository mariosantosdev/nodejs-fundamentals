import { randomUUID } from "node:crypto";

import { Database } from "../db.js";

const database = new Database();

export function CreateUser(req, res) {
  const { name, email } = req.body;
  const user = {
    id: randomUUID(),
    name: name,
    email: email,
  };

  database.insert("users", user);

  return res.writeHead(201).end();
}
