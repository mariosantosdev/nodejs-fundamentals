import { Database } from "../db.js";

const database = new Database();

export function GetUsers(_req, res) {
  const users = database.select("users");

  return (
    res
      // Set response header as JSON
      .setHeader("Content-Type", "application/json")
      // Return users array as JSON
      .end(JSON.stringify(users))
  );
}
