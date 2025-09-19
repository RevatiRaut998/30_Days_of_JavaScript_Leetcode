// 30 days of JavaScript : 2723. Add Two Promises
//Given two promises promise1 and promise2, return a new promise. 
// promise1 and promise2 will both resolve with a number. 
// The returned promise should resolve with the sum of the two numbers.
 
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // return Promise.all([promise1, promise2])
    //     .then(([result1, result2]) => result1 + result2);
    let value1 = await promise1;
    let value2 = await promise2;
    return value1+value2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

/*-------------------------------------------------------------------------------------------------*/

// Solution 2 

function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([result1, result2]) => result1 + result2);
}
