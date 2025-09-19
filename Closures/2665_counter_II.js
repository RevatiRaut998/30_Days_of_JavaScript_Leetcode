//30 days of JavaScript : 2665 - Counter II
// https://leetcode.com/problems/counter-ii/
// Write a function createCounter. It should accept an initial integer init and return an object with three functions:

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const originalInit = init;
    return {
        increment: function () {
            return ++init;
        },
        decrement: function () {
            return --init;
        },
        reset: function () {
            init=originalInit;
            return originalInit;
        }
    }
};
/*var createCounter = function (init) {
    let current = init;
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => (current = init),
    };
};*/


 const counter = createCounter(0)
//  console.log(counter.increment()); // 6
//  console.log(counter.reset()); // 5
//  console.log(counter.decrement()); // 4
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0
