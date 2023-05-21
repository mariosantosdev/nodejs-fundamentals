import { Database } from "../db.js";

const database = new Database();

export function UpdateUser(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;

  database.update("users", id, { name, email });

  res.writeHead(204).end();
}
