class TrafficLightColor {
  constructor(light) {
    this.light = light;
  }

  go() {}
}

class Yellow extends TrafficLightColor {
  constructor(light) {
    super(light);
  }

  go() {
    console.log("Yellow --> for 10 seconds");
    this.light.change(new Red(this.light));
  }
}

class Green extends TrafficLightColor {
  constructor(light) {
    super(light);
  }

  go() {
    console.log("Green --> for 1 minute");
    this.light.change(new Yellow(this.light));
  }
}

class Red extends TrafficLightColor {
  constructor(light) {
    super(light);
  }

  go() {
    console.log("Red --> for 1 minute");
    this.light.change(new Green(this.light));
  }
}

class TrafficLight {
  #count = 0;
  #currentState = new Red(this);

  change(state) {
    this.#count++;

    if (this.#count >= 10) {
      return;
    }

    this.#currentState = state;
    this.#currentState.go();
  }

  start() {
    this.#currentState.go();
  }
}

const trafficLight = new TrafficLight();
trafficLight.start();
