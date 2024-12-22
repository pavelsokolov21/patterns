const PRIORITY = {
  BASIC: "BASIC",
  INTERMEDIATE: "INTERMEDIATE",
  CRITICAL: "CRITICAL",
};

class Request {
  constructor(priority) {
    this.priority = priority;
  }
}

const req1 = new Request(PRIORITY.BASIC);
const req2 = new Request(PRIORITY.INTERMEDIATE);
const req3 = new Request(PRIORITY.CRITICAL);

/**
 * https://www.geeksforgeeks.org/chain-responsibility-design-pattern/
 */
const startClassicOOPSolution = () => {
  class Level1Support {
    #nextHandler = null;

    setNextHandler(nextHandler) {
      this.#nextHandler = nextHandler;
    }

    handleRequest(request) {
      if (request.priority === PRIORITY.BASIC) {
        console.log("Level 1 Support handled the request.");

        return;
      }

      this.#nextHandler.handleRequest(request);
    }
  }

  class Level2Support {
    #nextHandler = null;

    setNextHandler(nextHandler) {
      this.#nextHandler = nextHandler;
    }

    handleRequest(request) {
      if (request.priority === PRIORITY.INTERMEDIATE) {
        console.log("Level 2 Support handled the request.");

        return;
      }

      this.#nextHandler.handleRequest(request);
    }
  }

  class Level3Support {
    setNextHandler(nextHandler) {}

    handleRequest(request) {
      if (request.priority === PRIORITY.CRITICAL) {
        console.log("Level 3 Support handled the request.");

        return;
      }

      console.log("Request cannot be handled.");
    }
  }

  const lvl1Handler = new Level1Support();
  const lvl2Handler = new Level2Support();
  const lvl3Handler = new Level3Support();

  lvl1Handler.setNextHandler(lvl2Handler);
  lvl2Handler.setNextHandler(lvl3Handler);

  lvl1Handler.handleRequest(req1);
  lvl1Handler.handleRequest(req2);
  lvl1Handler.handleRequest(req3);
};

const startMySolution = () => {
  class ChainOfResponsibilities {
    #handlers = [];

    addHandler(handler) {
      this.#handlers.push(handler);
    }

    callHandler(...args) {
      if (this.isEmpty) {
        throw new Error("Handlers are empty");
      }

      const handler = this.#handlers.shift();

      return handler(...args, () => this.callHandler(...args));
    }

    get size() {
      return this.#handlers.length;
    }

    get isEmpty() {
      return this.size === 0;
    }
  }

  const chainOfResponsibilities = new ChainOfResponsibilities();

  chainOfResponsibilities.addHandler((req, next) => {
    if (req.priority === PRIORITY.BASIC) {
      console.log("Level 1 Support handled the request.");

      return;
    }

    next();
  });
  chainOfResponsibilities.addHandler((req, next) => {
    if (req.priority === PRIORITY.INTERMEDIATE) {
      console.log("Level 2 Support handled the request.");

      return;
    }

    next();
  });
  chainOfResponsibilities.addHandler((req) => {
    if (req.priority === PRIORITY.CRITICAL) {
      console.log("Level 3 Support handled the request.");

      return;
    }

    console.log("Request cannot be handled.");
  });

  chainOfResponsibilities.callHandler(req1);
  chainOfResponsibilities.callHandler(req2);
  chainOfResponsibilities.callHandler(req3);
};

// startClassicOOPSolution();
startMySolution();
