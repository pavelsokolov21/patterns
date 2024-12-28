// Abstract Expression
class Expression {
  interpret(context) {}
}

// Terminal Expression
class NumberExpression extends Expression {
  constructor(number) {
    super();
    this.number = number;
  }

  interpret(context) {
    return this.number;
  }
}

// Non-terminal Expression: Addition
class AddExpression extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(context) {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

// Non-terminal Expression: Subtraction
class SubtractExpression extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(context) {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}

// Non-terminal Expression: Multiplication
class MultiplyExpression extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(context) {
    return this.left.interpret(context) * this.right.interpret(context);
  }
}

// Non-terminal Expression: Division
class DivideExpression extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(context) {
    return this.left.interpret(context) / this.right.interpret(context);
  }
}

const context = {}; // Not used in this simple example

// Build expressions
const five = new NumberExpression(5);
const ten = new NumberExpression(10);
const addExpression = new AddExpression(five, ten);
const subtractExpression = new SubtractExpression(ten, five);
const multiplyExpression = new MultiplyExpression(five, ten);
const divideExpression = new DivideExpression(ten, five);

// Interpret the expressions
console.log("5 + 10 =", addExpression.interpret(context)); // Outputs: 15
console.log("10 - 5 =", subtractExpression.interpret(context)); // Outputs: 5
console.log("5 * 10 =", multiplyExpression.interpret(context)); // Outputs: 50
console.log("10 / 5 =", divideExpression.interpret(context)); // Outputs: 2
