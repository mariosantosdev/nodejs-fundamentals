import { Database } from "../db.js";

const database = new Database();

export function DeleteUser(req, res) {
  const { id } = req.params;

  database.delete("users", id);

  res.writeHead(204).end();
}
