// 30 days of Javacsript : 2703. Return Length of Arguments Passed
// https://leetcode.com/problems/arguments-length
// Write a function argsLength that accepts any number of arguments and returns the length of the arguments passed to it.

var argumentsLength = function(...args) {
    return args.length;
};
//You can also use the arguments object to get the length of arguments passed
// var argumentsLength = function() {
//     return arguments.length;
// };

//Example usage:
//Input: argsLength(1, 2, 3)
//Output: 3
//Input: argsLength("a", "b", "c", "d")
//Output: 4
//Input: argsLength()
//Output: 0
//Time Complexity: O(1) as we are just returning the length of arguments
//Space Complexity: O(1) as we are using only a constant amount of space

//Note: The arguments object is not available in arrow functions, hence we used rest parameters (...args) to achieve the same functionality
//In arrow function if you want to get length of argument:
// var argumentsLength = (...args) => args.length;

/*------------------------------------------------------------------------------------------------------------------------------*/