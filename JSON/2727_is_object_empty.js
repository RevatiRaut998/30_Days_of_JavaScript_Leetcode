// 30 days of JavaScript : 2727. Is Object Empty
/** 
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse. 

*/
// Solution 1:

var isEmpty = function (obj) {
  if (Array.isArray(obj) === 0) {
    return obj.length === 0;
  } else {
    let arr = Object.keys(obj);
    return arr.length === 0;
  }
};

/*****************************************************************************************************/

//Solution 2:

var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};
