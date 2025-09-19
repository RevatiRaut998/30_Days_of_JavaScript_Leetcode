// 30 days of JavaScript : 2623. Memoize
// https://leetcode.com/problems/memoize

/* Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. 
Assume that if a value has already been cached for the arguments (b, a) where a != b, 
it cannot be used for the arguments (a, b). 
For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */

function memoize(func1) {
  const cache = {};
  return function (...args) {
    let n = JSON.stringify(args); // Simple key generation
    if (n in cache) {
      return cache[n];
    } else {
      let result = func1.apply(this, args);
      cache[n] = result;
      return result;
    }
  };
}

// For Square of a number
function square(n) {
  return n * n;
}

function memoizeSquare(func) {
  let cache = {};
  return function (...args) {
    let n = args[0]; //Because our input is single parameter n
    if (n in cache) {
      return cache[n];
    } else {
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
}
console.time;
let effResult = memoize(square);
console.timeEnd();

console.time;
console.log(effResult(5));
console.timeEnd();
/*******************************************************************************************************************************************************************************************************************************************/

var memoize = function (fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    // Check if result is cached
    if (cache.has(key)) {
      return cache.get(key);
    }

    // Compute result and store it
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

/**
 * Memoize a function to cache its results for previously seen inputs.
 *
 * This function takes any function `fn` (e.g., sum, fib, factorial) and returns
 * a new memoized version that avoids recomputation.
 *
 * Logic:
 * 1. Create a cache (Map) to store input arguments and their computed results.
 * 2. Return a wrapper function that:
 *    a. Converts the input arguments into a unique key using JSON.stringify(args).
 *       - This ensures that order and structure of arguments are preserved.
 *       - For sum(a, b), the order matters: sum(2,3) ≠ sum(3,2).
 *       - For fib(n) or factorial(n), the key is just the single argument.
 *    b. Checks if the key exists in the cache:
 *       - If yes, return the cached result immediately.
 *       - If no, compute the result by calling the original function `fn`.
 *    c. Store the computed result in the cache for future calls.
 *    d. Return the computed result.
 *
 * Benefits:
 * - Avoids redundant calculations, improving performance for recursive or expensive functions.
 * - Works for functions with one or multiple arguments, including arrays and objects.
 *
 * Example:
 * const memoSum = memoize(sum);
 * memoSum(2, 3); // Computes and caches 5
 * memoSum(2, 3); // Returns cached 5
 *
 * const memoFib = memoize(fib);
 * memoFib(10); // Computes recursively but caches intermediate results
 * memoFib(10); // Returns cached result instantly
 */

//Time Complexity: O(n) for fib and factorial due to caching, O(1) for sum
//Space Complexity: O(n) for storing cached results
