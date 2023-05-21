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
    return res.end("Create user");
  }

  if (method === "GET" && url === "/users") {
    return res.end(JSON.stringify(users));
  }

  return res.end("Hello Ignite");
});

server.listen(3333, () => console.log("Server is running"));
