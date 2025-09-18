// 30 days of Javacsript : 2619. Array Prototype Last
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

/*
Here, the ternary operator ? : doesn’t automatically “know” anything about numbers — 
it just evaluates the truthiness of the expression before the ?.

In our case:
this.length ? this[this.length - 1] : -1

this.length is a number.

- In JavaScript, numbers are automatically converted to a boolean when needed 
  (like in if or ternary conditions).

Truthy/falsy rules for numbers:
0 → falsy
Any non-zero number → truthy

So when you write this.length ? ... : ...:
If this.length is 0 → falsy → -1 is returned
If this.length is, say, 3 → truthy → this[this.length - 1] is returned

You don’t need to write this.length > 0, because 0 is falsy and anything positive 
is truthy.

✅ The ternary is just using JavaScript’s built-in truthiness conversion.
*/
