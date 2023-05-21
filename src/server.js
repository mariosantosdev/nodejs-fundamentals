import http from "node:http";

import { bodyParser } from "./middlewares/body-parser.js";
import { routes } from "./routes.js";
import { extractQueryParams } from "./utils/extract-query-params.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await bodyParser(req, res);

  const route = routes.find(
    (route) => route.method === method && route.url.test(url)
  );

  if (route) {
    const routeParams = req.url.match(route.url);
    const { query, ...params } = routeParams.groups;

    req.query = extractQueryParams(query);
    req.params = params;

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3333, () => console.log("Server is running"));
