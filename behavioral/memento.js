import { log } from "../utils/log";

class Memento {
  #store = [];

  save(snapshot) {
    this.#store.push(snapshot);
  }

  restoreLast() {
    if (this.isEmpty) {
      console.error("Store is empty");

      return null;
    }

    return this.#store.pop();
  }

  restoreByIdx(idx) {
    if (idx < 0 || idx >= this.size) {
      console.error(`Index "${idx}" is out of range`);

      return;
    }

    const el = this.#store[idx];

    this.#store = this.#store.filter((_, storeItemIdx) => storeItemIdx !== idx);

    return el;
  }

  clear() {
    this.#store = [];
  }

  get isEmpty() {
    return this.#store.length === 0;
  }

  get size() {
    return this.#store.length;
  }

  get store() {
    return this.#store;
  }
}

class Vacancy {
  constructor(history) {
    this._history = history;
  }

  add(vacancy) {
    this._history.save(vacancy);
  }

  undo() {
    return this._history.restoreLast();
  }
}

const vacancy = new Vacancy(new Memento());

vacancy.add("foo");
vacancy.add("bar");
vacancy.add("bazz");

const loggedVacancyUndo = log(vacancy.undo, vacancy);

loggedVacancyUndo();
loggedVacancyUndo();
