// // 30 days of JavaScript : 2635. Apply Transform Over Each Element in Array (Cue: MAP Function)

// Given an array arr and a function fn, return a new array with fn applied to each element of arr.
// Please solve it without the built-in Array.map method.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Use map function's original definition of taking a callback function with two arguments: the current element and the index of that element.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

//Here in output array 'result', each element is the result of applying the function 'fn' to the 
// corresponding element in the input array 'arr' along with its index.
// we do not know what fn is doing, it could be any operation like squaring the number, doubling it, etc. 
// Therefore, as stated in question we are passing both element and index to fn.
