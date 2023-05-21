import fs from "node:fs/promises";

export class Database {
  #dbPath = new URL("db.json", import.meta.url);
  #database = {};

  constructor() {
    fs.readFile(this.#dbPath, "utf-8")
      .then((data) => (this.#database = JSON.parse(data)))
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(this.#dbPath, JSON.stringify(this.#database));
  }

  select(table) {
    return this.#database[table] ?? [];
  }

  insert(table, data) {
    if (Array.isArray(data)) {
      this.#database[table] = data;
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }
}
