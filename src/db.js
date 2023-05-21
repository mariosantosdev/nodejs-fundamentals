export class Database {
  #database = {};

  select(table) {
    return this.#database[table] ?? [];
  }

  insert(table, data) {
    if (Array.isArray(data)) {
      this.#database[table] = data;
    } else {
      this.#database[table] = [data];
    }
  }
}
