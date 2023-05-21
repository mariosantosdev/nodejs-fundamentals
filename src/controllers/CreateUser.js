import { randomUUID } from "node:crypto";

export function CreateUser(req, res, database) {
  const { name, email } = req.body;
  const user = {
    id: randomUUID(),
    name: name,
    email: email,
  };

  database.insert("users", user);

  return res.writeHead(201).end();
}
