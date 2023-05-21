import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "POST" && url === "/users") {
    return res.end("Create user");
  }

  if (method === "GET" && url === "/users") {
    return res.end("List users");
  }

  return res.end("Hello Ignite");
});

server.listen(3333, () => console.log("Server is running"));
