// 30 days of Javacsript : 2666. Allow One Function Call
// https://leetcode.com/problems/once
// Write a function once that accepts a callback function fn and returns a new function that can be invoked only once.
// Subsequent calls to the new function should have no effect and return undefined.
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called=false;
    return function(...args){
        if(!called){
            called=true;
            return fn(...args);
        }return undefined;
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
