import http from "node:http";
import { randomUUID } from "node:crypto";
import { bodyParser } from "./middlewares/body-parser.js";
import { Database } from "./db.js";

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await bodyParser(req, res);

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;
    const user = {
      id: randomUUID(),
      name: name,
      email: email,
    };

    database.insert("users", user);

    return res.writeHead(201).end();
  }

  if (method === "GET" && url === "/users") {
    const users = database.select("users");

    return (
      res
        // Set response header as JSON
        .setHeader("Content-Type", "application/json")
        // Return users array as JSON
        .end(JSON.stringify(users))
    );
  }

  return res.writeHead(404).end();
});

server.listen(3333, () => console.log("Server is running"));
