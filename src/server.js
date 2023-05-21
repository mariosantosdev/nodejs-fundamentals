import http from "node:http";

import { bodyParser } from "./middlewares/body-parser.js";
import { routes } from "./routes.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await bodyParser(req, res);

  const route = routes.find(
    (route) => route.method === method && route.url === url
  );

  if (route) return route.handler(req, res);

  return res.writeHead(404).end();
});

server.listen(3333, () => console.log("Server is running"));
