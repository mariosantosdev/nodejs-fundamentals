import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  #index = 1;

  // _read() is a method that must be implemented by any class that extends Readable
  _read() {
    const i = this.#index++;

    // setTimeout is used to simulate a delay in the response
    setTimeout(() => {
      if (i > 100) {
        // To indicate that we have finished sending data, we call the push method with null
        this.push(null);
      } else {
        // Convert the data to a buffer and push it to the stream
        const str = `${i}`;
        const buf = Buffer.from(str, "utf-8");
        this.push(buf);
      }
    }, 1000);
  }
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream(),
  duplex: "half",
});
