// 30 days of Javacsript : 2634. Filter Elements from Array
/*Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
/*
- Here we are implementing a custom filter function that mimics the behavior of the built-in Array.filter method in JavaScript.
- The filter function takes an array arr and a callback function fn as arguments.
- It iterates through each element of the array arr, applying the callback function fn to each element along with its index.
- If the callback function returns a truthy value for that element, the element is added to the filteredArr array.
- Finally, the function returns the filteredArr array containing only the elements that passed the filtering condition defined by fn.
*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr=[];
    for(let i =0;i<arr.length;i++){
        if(fn(arr[i], i)){
        filteredArr.push(arr[i]);
        }   
    }return filteredArr;
    
};

