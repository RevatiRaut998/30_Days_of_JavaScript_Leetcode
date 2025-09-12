// 30 days of Javacsript : 2626. Array Reduce Transformation
/* Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method./*

// Here we are implementing a custom reduce function that mimics the behavior of the built-in Array.reduce method in JavaScript.
// The reduce function takes an array nums, a callback function fn, and an initial value init as arguments.
// It iterates through each element of the array nums, applying the callback function fn to an accumulator (which starts as init) and the current element.
// The result of each function call becomes the new value of the accumulator for the next iteration.
// Finally, the function returns the accumulated value after processing all elements in the array.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result;
    let val=init;
    for(let i=0;i<nums.length;i++){
            val = fn(val,nums[i]);
    } return val;
};