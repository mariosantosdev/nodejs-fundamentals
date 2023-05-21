import http from "node:http";

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null;
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;
    users.push({
      id: users.length + 1,
      name: name,
      email: email,
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
