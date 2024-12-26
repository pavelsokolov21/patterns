class Observer {
  #observers = new Set();

  subscribe(fn) {
    this.#observers.add(fn);
  }

  unsubscribe(fn) {
    this.#observers.delete(fn);
  }

  broadcast(data) {
    for (const fn of this.#observers) {
      fn(data);
    }
  }
}

const observer = new Observer();

observer.subscribe((data) => console.log("Logger 1", data));
observer.subscribe((data) => console.log("Logger 2", data));
observer.subscribe((data) => console.log("Logger 3", data));

observer.broadcast({ data: "any-data" });
