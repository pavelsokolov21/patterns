class Command {
  execute() {}
}

class OnCommand extends Command {
  constructor(lightBulb) {
    super();
    this.lightBulb = lightBulb;
  }

  execute() {
    this.lightBulb.on();
  }
}

class OffCommand extends Command {
  constructor(lightBulb) {
    super();
    this.lightBulb = lightBulb;
  }

  execute() {
    this.lightBulb.off();
  }
}

class LightBulb {
  on() {
    console.log("Bulb is ON");
  }

  off() {
    console.log("Bulb is OFF");
  }
}

class Switch {
  #command = null;

  setCommand(command) {
    this.#command = command;
  }

  executeCommand() {
    this.#command.execute();
  }
}

const light = new LightBulb();
const on = new OnCommand();
const off = new OffCommand();

const switchBtn = new Switch();

switchBtn.setCommand(on);
switchBtn.executeCommand();

switchBtn.setCommand(off);
switchBtn.executeCommand();
