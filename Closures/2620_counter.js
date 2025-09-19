// 30 days of JavaScript : 2620. Counter
// Write a function createCounter. It should accept an initial integer n and return a function that when called, increments n by 1 and returns it.
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
     var counter=n;
        
    return function() {
        return counter++;
    };
  
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */