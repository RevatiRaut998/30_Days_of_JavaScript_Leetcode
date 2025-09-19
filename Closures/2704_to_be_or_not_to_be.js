// 30 days of JavaScript : 2704.  To Be Or Not To Be
// Implement Custom Function with Custom Error Message
// https://leetcode.com/problems/expect
// Write a function expect that accepts an argument val and returns an object with two functions toBe and notToBe.
// toBe: This function accepts an argument otherVal and returns true if val and otherVal are strictly equal (val === otherVal). If they are not, it should throw an error with the message "Not Equal".
// notToBe: This function accepts an argument otherVal and returns true if val and otherVal are not strictly equal (val !== otherVal). If they are equal, it should throw an error with the message "Equal".
/**
 * @param {string} val
 * @return {Object}
 */
/*var expect = function(val) {
    return {
                toBe:function(otherVal){
                    if(val===otherVal){
                    return true;
                    }else {
                    throw new Error("Not Equal");
                    }
                } ,
                notToBe:function(otherVal){
                    if(val!==otherVal){
                    return true;
                    }else{
                    throw new Error("Equal");
                    }
                }
            };
};*/
var expect = (val) => ({
  toBe(otherVal) {
    if (val === otherVal) return true;
    throw new Error("Not Equal");
  },
  notToBe(otherVal) {
    if (val !== otherVal) return true;
    throw new Error("Equal");
  }
});


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */