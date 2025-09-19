// 30 days of JavaScript : 2619. Array Prototype Last
/*
Write code that enhances all arrays such that you can call the array.last() method on any array 
and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.
*/

//Solution 1
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};


//Solution 2
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};


//Solution 3
Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

/* CONCEPTS:
==========================
1. Array.prototype
==========================

- Every array in JavaScript inherits from Array.prototype.
- Array.prototype contains all built-in array methods like push, pop, map, filter, etc.
- By adding a method to Array.prototype, every array automatically gains that method.

Example:
Array.prototype.sayHi = function() { console.log("Hi!"); };
let arr = [1, 2, 3];
arr.sayHi(); // "Hi!"

==========================
2. Array.prototype.last
==========================

- We are adding a custom method 'last' to Array.prototype.
- Syntax:
  Array.prototype.last = function() { ... }

- Purpose: get the last element of an array, or return -1 if the array is empty.
- Because it’s on the prototype, every array can call .last() directly.

Example:
let numbers = [10, 20, 30];
numbers.last(); // 30
[].last();      // -1

==========================
3. Use of 'this' in this solution
==========================

- Inside a method on Array.prototype, 'this' refers to the array that called the method.
- In our solution:
  Array.prototype.last = function() {
      return this.length ? this[this.length - 1] : -1;
  }

- Explanation:
  1. this.length → length of the current array

  2. Ternary operator ? :
     - Here, the ternary operator ? : doesn’t automatically “know” anything about numbers — 
       it just evaluates the truthiness of the expression before the ?.
     - If this.length > 0 (truthy), return this[this.length - 1] → last element
     - If this.length === 0 (falsy), return -1
     - In our case:
       this.length ? this[this.length - 1] : -1
     - this.length is a number.
     - In JavaScript, numbers are automatically converted to a boolean when needed 
       (like in if or ternary conditions).
     - Truthy/falsy rules for numbers:
         0 → falsy
         Any non-zero number → truthy
     - So when you write this.length ? ... : ...:
         If this.length is 0 → falsy → -1 is returned
         If this.length is, say, 3 → truthy → this[this.length - 1] is returned
     - You don’t need to write this.length > 0, because 0 is falsy and anything positive 
       is truthy.
     ✅ The ternary is just using JavaScript’s built-in truthiness conversion.
     
  3. No need to pass the array as an argument because 'this' automatically refers to it.

- Example in action:
  let arr = [5, 10, 15];
  arr.last(); // 15
  [].last();  // -1

- 'this' is key because it allows the method to work on **any array**, not just one specific array.
*/
