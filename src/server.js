import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    });
    return res.writeHead(201).end();
  }

  if (method === "GET" && url === "/users") {
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
