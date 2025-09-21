// 30 days of JavaScript : 2721. Execute Asynchronous Functions in Parallel

/*Given an array of asynchronous functions functions, return a new promise promise. 
Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:
When all the promises returned from functions were resolved successfully in parallel. 
The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. 
The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

promise rejects:
When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

 */


var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let res = Array(functions.length);
    let waitingFor = functions.length;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          res[i] = result;
          waitingFor--;
          if (waitingFor === 0) resolve(res);
        })
        .catch(reject);
    }
  });
};




//With explaination :
// Custom implementation of Promise.all
var promiseAll = function(functions) {
  // Return a new Promise that will resolve when all async functions finish,
  // or reject if any one of them rejects
  return new Promise((resolve, reject) => {

    // Array to hold results in the same order as input functions
    let res = Array(functions.length);

    // Counter to track how many promises are still pending
    let waitingFor = functions.length;

    // Loop through each function in the array
    for (let i = 0; i < functions.length; i++) {
      // Call the function to get its promise
      functions[i]()
        // If it resolves successfully
        .then((result) => {
          // Store the result at the correct index
          res[i] = result;

          // Decrement the counter
          waitingFor--;

          // If all promises have resolved, resolve the outer promise with results
          if (waitingFor === 0) resolve(res);
        })
        // If any promise rejects, immediately reject the outer promise
        .catch(reject);
    }
  });
};

