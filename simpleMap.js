class SimpleMap {
  constructor() {
    this.#data = {};
  }

  set(key, value) {
    this.#data[key] = value;
  }

  get(key) {
    return this.#data[key];
  }
  has(key) {
    if (this.#data[key] == key) {
      return true;
    }
    return false;
  }
  delete() {
    this.#data = {};
  }
}
