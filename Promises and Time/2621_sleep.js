// 30 days of JavaScript : 2621. Sleep
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. 
// It can resolve any value.
// Note that minor deviation from millis in the actual sleep duration is acceptable.

 

async function sleep(millis) {
    const t = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, millis);
    });
    
    return t;
}
/*---------------------------------------------------------------------------------------------------------------*/

//Cleaner way to write it :
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
