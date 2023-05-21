import { Readable, Writable, Transform } from "node:stream";

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

class ConvertToNegativeStream extends Transform {
  // _transform() is a method that must be implemented by any class that extends Transform
  _transform(chunk, encoding, callback) {
    const data = chunk.toString();
    const negative = Number(data) * -1;

    // We call the callback function with the transformed data
    callback(null, Buffer.from(negative.toString()));
  }
}

class MultiplyByTenStream extends Writable {
  // _write() is a method that must be implemented by any class that extends Writable
  _write(chunk, encoding, callback) {
    const data = chunk.toString();
    console.log(`${data} * 10 = ${data * 10}`);
    callback();
  }
}

// We create a new instance of our class and pipe it to the standard output
new OneToHundredStream()
  .pipe(new ConvertToNegativeStream())
  .pipe(new MultiplyByTenStream());
