class Storage {
  setItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getItem(name) {
    const value = localStorage.getItem(name);
    return JSON.parse(value);
  }
  clear() {
    localStorage.clear();
  }
}

const storage = new Storage();
export default storage;
