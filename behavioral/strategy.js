class StrategyManager {
  #strategies = new Map();

  addStrategy(name, strategy) {
    this.#strategies.set(name, strategy);
  }

  getStrategy(name) {
    if (!this.#strategies.has(name)) {
      throw new Error("Strategy does not exist");
    }

    return this.#strategies.get(name);
  }
}

class Strategy {
  constructor(handler) {
    this._handler = handler;
  }

  do() {
    this._handler();
  }
}

const strategyManager = new StrategyManager();
const strategy1 = new Strategy(() => console.log("Strategy_1"));
const strategy2 = new Strategy(() => console.log("Strategy_2"));

strategyManager.addStrategy("strategy1", strategy1);
strategyManager.addStrategy("strategy2", strategy2);

strategyManager.getStrategy("strategy1").do();
strategyManager.getStrategy("strategy2").do();
