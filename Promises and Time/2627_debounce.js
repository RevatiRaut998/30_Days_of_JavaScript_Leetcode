// 30 days of JavaScript : 2627. Debounce
/*
Given a function fn and a time in milliseconds t, return a debounced version of that function.
A debounced function is a function whose execution is delayed by t milliseconds and whose execution 
is cancelled if it is called again within that window of time. 
The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.
The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.
If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, 
and the 3rd would be executed at 135ms.

*/

// To study Debounce function in JS - https://www.geeksforgeeks.org/javascript/debouncing-in-javascript/

/**************************************************************************************************************/

//Solution 1 
var debounce = function (fn, t) {
  let timeout; // This variable will store the timer ID
  return function (...args) {
    // Returns a new function that will be called
    clearTimeout(timeout); // Clear any existing timer
    timeout = setTimeout(() => {
      fn.apply(this, args); // Execute the original function after the delay
    }, t);
  };
};

//Solution 2 - No change , just Single-line arrow function
function debounce(fn, t) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId); // cancel any existing timer
    timerId = setTimeout(() => fn(...args), t); // set a function to go off when a time is complete
  };
}

/**************************************************************************************************************/

//LEARNINGS :
// Function to be debounced
function search(query) {
  console.log("Searching for:", query);
}

//Example:
// Create a debounced version of the search function
const dSearch = debounce(search, 100);

// Simulate typing with multiple calls to the debounced function
dSearch("Hello");
dSearch("Hello, ");
dSearch("Hello, World!"); // Only this call will trigger after 100ms
