// 30 days of JavaScript : 2625. Flatten Deeply Nested Array
/*
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and 
replaced with the actual elements in that sub-array. This flattening operation should only be done if the 
current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.
*/

//Solution :

var flat = function(arr, n) {
  // This array will hold the final flattened elements
  const result = [];

  // Recursive helper function that traverses the array
  // array: the current array/sub-array being processed
  // depth: the current depth of nesting
  function helper(array, depth) {
    // Loop through each element of the current array
    for (let el of array) {
      // If the element is an array AND we haven't reached the max depth
      if (Array.isArray(el) && depth < n) {
        // Recursively process the sub-array, increasing the depth by 1
        helper(el, depth + 1); 
      } else {
        // Otherwise, it's either not an array or we've reached max depth
        // Push the element directly into the result array
        result.push(el);
      }
    }
  }

  // Start the recursion from the original array at depth 0
  helper(arr, 0);

  // Return the fully flattened array
  return result;
};

