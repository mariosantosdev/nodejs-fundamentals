import http from "node:http";
import { Transform } from "node:stream";

class ConvertToNegativeStream extends Transform {
  // _transform() is a method that must be implemented by any class that extends Transform
  _transform(chunk, encoding, callback) {
    const data = chunk.toString();
    const negative = Number(data) * -1;
    const result = `Received ${data} and converted to ${negative}`;

    console.log(result);

    // We call the callback function with the transformed data
    callback(null, Buffer.from(result));
  }
}

const server = http.createServer((req, res) => {
  return req.pipe(new ConvertToNegativeStream()).pipe(res);
});

server.listen(3334, () => console.log("Server is running"));
