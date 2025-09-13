// 30 days of Javacsript : 2629. Function Composition
// https://leetcode.com/problems/function-composition
/* Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output. */
//Here, the requirement is to create a function which is a composition of multiple functions passed in an array
function compose(functions) {
  return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

//Example usage:
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight(function(acc,fn){
            return fn(acc);
            },x);
    };
};
//You can directly write arrow function inside reduceRight
//const compose = (functions) => (x) => functions.reduceRight((acc,fn) => fn(acc),x);
// reduceRight method is used to apply the functions from right to left
//If the array is empty, it returns the input value x as is
//Time Complexity: O(n) where n is the number of functions in the array
//Space Complexity: O(1) as we are using only a constant amount of space

//Example 1:
//Input: functions = [x => x + 1, x => x * 2, x => x - 3], x = 5
//Output: 5