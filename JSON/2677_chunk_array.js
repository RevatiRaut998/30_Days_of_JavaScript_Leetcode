// 30 days of JavaScript : 2677. Chunk Array

/**
Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's _.chunk function.
 
*/

// JS Solution
var chunk = function (arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));


/**********************************************************************************************************/
// Lodash's _.chunk

/* Lodash - Lodash is a utility library for JavaScript,
            providing functions to work with arrays,
            objects, strings, etc

*/

//Syntax -
_.chunk(Array, size); // _ is varaiable name

//Example :
// import { chunk } from "lodash";
const abc = require("lodash");
let arr = [1, 2, 3, 4, 5, 6];

//Making chunks of size 1
console.log(abc.chunk(arr, 1)); //Output : [[1],[2],[3],[4],[5],[6]]

/**********************************************************************************************************/

