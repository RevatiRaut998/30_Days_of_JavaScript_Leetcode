// 30 days of JavaScript : 2726. Calculator with Method Chaining

/*
Design a Calculator class. The class should provide the mathematical operations of addition,
 subtraction, multiplication, division, and exponentiation. It should also allow consecutive 
 operations to be performed using method chaining. The Calculator class constructor should 
 accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. 
         If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated Calculator.
getResult - This method returns the result.
Solutions within 10-5 of the actual result are considered correct.
*/


//Solution:
class Calculator {
  constructor(value) {
    this.result = value; // initial value
  }

  add(value) {
    this.result += value;
    return this; // allow chaining
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result **= value;
    return this;
  }

  getResult() {
    // Precision check: solutions within 1e-5 are valid
    return Math.abs(this.result) < 1e-5 ? 0 : this.result;
  }
}

// Example usage:
const calc = new Calculator(2);
console.log(
  calc.add(3).multiply(4).subtract(5).divide(5).power(2).getResult()
);
// Step by step: ((2+3)*4 - 5)/5 = 3 → 3^2 = 9
