// 30 days of JavaScript : 2724. Sort By

/*
Given an array arr and a function fn, return a sorted array sortedArr. 
You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.
*/

//Solution :
//Sort can be used as sort(compareFunction)    // (Reference - mdn docs)

//compareFunction syntax - (a,b) => a-b , sorts number ascending order

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

//Here we are just comparing function output of fn(a) and fn(b) to get the order based on postivie and negative output
//This is for Ascending order

//For descending order 
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(b) - fn(a));
};