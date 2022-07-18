/**
 * class representing a Calculator
 */

class Calculator {
  /**
   * Created a Calculator
   */
  constructor() {
    //properties

    /**
     * @param {number} pi - The pi value.
     * @param {number} e - The Euler value.
     */
    this.PI = 3.141592653589793;
    this.E = 2.718281828459045;
  }
  //Getter
  get pi() {
    return `PI (${this.PI})`;
  }

  get e() {
    return `Eulner's number (${this.E})`;
  }
  //methods

  /**
   * ratio-method returns the aspect ratio
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @param {number} width - The width of a shape etc.
   * @returns {number} - returns a number
   */
  ratio(x, y, width) {
    let widthRatio = width / x;
    let heightRatio = widthRatio * y;
    return `height is ${heightRatio} on ratio ${x}:${y}`;
  }
  /**
   * percentage-method return height is --- on ratio x:y
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @returns {number} - The value of percentage
   */
  percentage(x, y) {
    return parseFloat(`${(x / y) * 100}`);
  }
  /**
   * add-method returns the sum of x added to y.
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @returns {number} - The added value
   */
  add(x, y) {
    return x + y;
  }
  /**
   * subtract-method returns the difference of y subtracted to x.
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @returns {number} - The difference
   */
  subtract(x, y) {
    return y - x;
  }
  /**
   * multiply-method returns the product of x multiplied by y.
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @returns {number} - The multiplication value
   */
  multiply(x, y) {
    return x * y;
  }
  /**
   * divide-method returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @returns {number} - The division value
   */
  divide(x, y) {
    if (y === 0) return "Error! Divisor can't be 0";
    return x / y;
  }
  /**
   * modulation-method returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.divisor is set to 0, an error will be thrown.
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @returns {number} - The remainder value
   */
  modulation(x, y) {
    if (y === 0) return "Error! Divisor can't be 0";
    return x % y;
  }
  /**
   * elevate-method returns the power of x elevated to y.
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @returns {number} - The power value
   */
  elevate(x, y) {
    return Math.pow(x, y);
  }
  /**
   * sqrt-method returns the square root of x.
   * @param {number} x - The x value
   * @returns {number} - The square root value
   */
  sqrt(x) {
    return Math.sqrt(x);
  }
}

/**
 * calculate is the instance of class Calculator.
 */

const calculate = new Calculator();
console.log(`*****01*****`);
const PI = calculate.pi;
console.log(PI);
console.log(`*****02*****`);
const EulerNumber = calculate.e;
console.log(EulerNumber);
console.log(`*****03*****`);
const aspectRatio = calculate.ratio(2, 3, 5);
console.log(aspectRatio);
console.log(`*****04*****`);
const percentage = calculate.percentage(15, 120);
console.log(percentage);
console.log(`*****05*****`);
const addition = calculate.add(2, 3);
console.log(addition);
console.log(`*****06*****`);
const subtraction = calculate.subtract(2, 5);
console.log(subtraction);
console.log(`*****07*****`);
const multiplication = calculate.multiply(3, 5);
console.log(multiplication);
console.log(`*****08*****`);
const division = calculate.divide(5, 2);
console.log(division);
console.log(`*****09*****`);
const remainder = calculate.modulation(5, 3);
console.log(remainder);
console.log(`*****10*****`);
const power = calculate.elevate(2, 3);
console.log(power);
console.log(`*****11*****`);
const squareRoot = calculate.sqrt(25);
console.log(squareRoot);
