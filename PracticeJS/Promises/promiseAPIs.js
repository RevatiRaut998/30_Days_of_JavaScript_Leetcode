/*------------------------------------------------------------------------------------------------------------------------------*/
// Promise API's
/*
 * Promise.all()
 * Promise.allSettled()
 * Promise.race()
 * Promise.any()
 */

/*------------------------------------------------------------------------------------------------------------------------------*/

// Promise.all()
// It handles multiple promises at same time
// It takes array of promises as an input
// And returns array of results (of all promises) as an output

//Example :
//Promise.all([P1, P2, P3]);

// Here we have 3 promises : P1 takes 3 sec to resolve , P2 takes 1 sec to resolve & P3 takes 2 sec to resolve
// Now, Promise.all will make all 3 api calls parallely and give output after 3 seconds for all of them
// Note : It will wait for all Promises inside the iterate to get resolved , only then give output

// If any one of these promises gets failed ro rejected, Promise.all works differently

//Example :
//Promise.all([Q1, Q2, Q3]);
// Here we have 3 promises : Q1 takes 3 sec to resolve , Q2 takes 1 sec to resolve & Q3 takes 2 sec to resolve
// Here, after 1 second Q2 gets rejected ,as soon as any of the promise gets rejected Promise.all will throw an error
// The Output of Pormise.all will be the error, it will be the same error returned by Q2.
// Here atfter 1 sec you will see and error, it will not wait for Q1 and Q3 to finish.

// What happens to Q1 and Q3 in this case? A promise once made cannot be cancelled in JS atm, so we cant cancel Q1 and Q3
// Q1 and Q3 here will get resolved/rejected once thier time is up but Promise.all will be rejected as soon as Q2 errors out

// All or nothing approach:
// In success case: it will wait for all Promises to be executed , in case of Failure, it will error out immediately

/*------------------------------------------------------------------------------------------------------------------------------*/

// Promise.allSettled()

// What if I have 10 API calls inside a Promise.all and one fo them fails but I still want outputs of remaining 9 API calls?
// That's where Promise.allSettled() comes into picture
// It gives output for all Promises that were resolved/rejected

// Promise.allSettled() is a static method in JavaScript that takes an iterable of Promises as input and returns a single Promise.
// This returned Promise fulfills when all of the input Promises have "settled," meaning they have either resolved successfully or rejected with an error.

// Example:
//Promise.allSettled([R1, R2, R3]);

// Here, suppose R1 takes 3 sec to resolve , R2 takes 1 sec to resolve & R3 takes 2 sec to resolve
// But R2 fails in 1 second itself, Promise.allSettled() will still wait for 2 sec and 3 sec for R3 AND R1 to be resolved/rejected

//Promise.allSettled() waits for all promises to be settled , irrespective of success or failure it will give R1,R2,R3 in Output array
// Output will be same number of arrays you had in input array

//Output : [val1, err2, val3]

/*------------------------------------------------------------------------------------------------------------------------------*/

//  Promise.race()

// Here , its a race - the promise that finishes first wins

// Example:
//Promise.race([S1, S2, S3]);

// Here, suppose S1 takes 3 sec to resolve , S2 takes 1 sec to resolve & S3 takes 2 sec to resolve
// As soon as 1 sec is up and S2 is settled , it will give output as (VAL2)
// NOTE: Its not an array its the value for S2 (i.e value of the first settled promise)

// What if the first settled promise was rejected instead of resolved?
// If S2 fails after 1 second, (ERROR) will be thrown , Whatever error comes from S2 (i.e it will retyrn result of first settled promise) regardless of success or failure
// It will not wait for other promises to settle, its a race

/*------------------------------------------------------------------------------------------------------------------------------*/

// Promise.any()

// Example :
//Promise.any([T1, T2, T3]);

// Here, suppose T1 takes 3 sec to resolve , T2 takes 1 sec to resolve & T3 takes 2 sec to resolve
// Similar to race : Here promise.any() waits for the first SUCCESS promise to return as output
// In race we returned first SETTLED promise value, Here we return first SUCCESS promise value

//In example if T2 is resolved after 1 sec , Promise.any() will give output as value of T2
// If T2 fails and gets rejected it will do nothing after the 1 sec, it will wait for the next promise to be successful ,
// If after 2 sec T3 is resolved successfully, we get output as (Val3) of T3

// It will always wait for FIRST RESOLVED promise to give output and ignore the failed promises
// Its a success seeking race

// If all promises FAIL : After 3 seconds we will get - The result as an AGGREGATED ERROR - This will be an ARRAY of ALL 3 ERRORS ([ERR1, ERR2, ERR3])

// diff bet race and any is : Race will give you the first result regardless fo succes or failure
// any will wait for first sucess but if all fail, it will give an arrya of aggregate error

/*------------------------------------------------------------------------------------------------------------------------------*/
/*############################################################################################################*/

// EXAMPLES FOR ALL TYPES:

//                                                  1. Promise.all

const a1 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("A1 Success"),8000);
  setTimeout(() => reject("A1 Fail"), 8000);
});

const a2 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("A2 Success"),1000);
  setTimeout(() => reject("A2 Fail"), 1000);
});

const a3 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("A3 Success"),2000);
  setTimeout(() => reject("A3 Fail"), 2000);
});

Promise.all([a1, a2, a3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//For all resolved : It will give output in console after 8 seconds , it waits for all to resolve.
//Output :  ['A1 Success', 'A2 Success', 'A3 Success']

// If A2 Fails in 1 sec , Promise.all will fail : Output: A2 Fail

/*############################################################################################################*/

//                                               2.Promise.allSettled()

Promise.allSettled([a1, a2, a3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//Condition for testing - A1, A3 will be resolved , A2 will fail , A1:3SEC , A2:1SEC , A3:2SEC
/* OUTPUT : 
    [{…}, {…}, {…}]
    0: {status: 'fulfilled', value: 'A1 Success'}
    1: {status: 'rejected', reason: 'A2 Fail'}
    2: {status: 'fulfilled', value: 'A3 Success'}
    length: 3
    [[Prototype]]: Array(0)

*/

//Promise.allSettled will give : The output as an array of objects, one per promise, keeping the input order.
/*  Each object has:
      { status: "fulfilled", value: ... } if it resolved.
      { status: "rejected", reason: ... } if it rejected.
*/

/*############################################################################################################*/

//                                                    3.Promise.race()

Promise.race([a1, a2, a3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//Condition1 for testing - A1, A3 will be resolved , A2 will fail , A1:3SEC , A2:1SEC , A3:2SEC
// Here because A2 has the elast amount of time and it failed , the OUTPUT was : A2 FAIL

//Condition2 for testing - A1, A3 will be resolved , A2 will fail , A1:3SEC , A2:5SEC , A3:2SEC
// Here because A3 settles the first and it is resolved , the OUTPUT was : A3 Success

//First settled promise, whether success or fail , it will print the value

/*############################################################################################################*/

//                                                   4.Promise.any()

Promise.any([a1, a2, a3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors); //For ARRAY OF AGGREGRATE ERRORS 
    console.log(err.errors[0]); // Output : A1 Fail
  });

//Condition1 for testing - A1, A3 will be resolved , A2 will fail , A1:3SEC , A2:1SEC , A3:2SEC
// Here Promise.any waits for first success , so OUTPUT : A3 Success

//Condition2 for testing - A1, A3 will be resolved , A2 will fail , A1:3SEC , A2:5SEC , A3:7SEC
// Here Promise.any waits for first success , so OUTPUT : A1 Success

//Promise.any ignores the failed promises and only prints the first successful promise
// But if all promises get rejected , it will print aggregate array for errors

//Condition3 for testing - A1, A2, A3 will fail , A1:8SEC , A2:1SEC , A3:2SEC
// After 8 seconds , OUTPUT - AggregateError: All promises were rejected

// TO GET ARRAY OF ERRORS IN CATCH ADD:  console.log(err.errors);
/* OUTPUT :
 ['A1 Fail', 'A2 Fail', 'A3 Fail']
      0: "A1 Fail"
      1: "A2 Fail"
      2: "A3 Fail"
      length: 3
*/
// IF you want specific promise error , write : console.log(err.errors[0]) / console.log(err.errors[1]) / console.log(err.errors[2])

/*############################################################################################################*/

/**  🔑 Promise Terminology
 * Pending → The initial state. Promise hasn’t produced a result yet (neither success nor failure).
 * Settled → The promise has finished and produced a result (no longer pending).
 * A settled promise can be either:
- Fulfilled (aka Resolved) → Completed successfully, returned a value.
- Rejected → Completed with failure, returned a reason (error).

 * Resolved vs Fulfilled →
- Fulfilled strictly means: finished successfully with a value.
- Resolved means: the promise is settled with another promise or value.

 * So every fulfilled promise is resolved, but a resolved promise could also adopt the state of another promise (even if that one rejects).
 * In casual use though, people often say “resolved” when they actually mean “fulfilled.”

 * Result → Generic word for the outcome of a settled promise, which could be either value (success) or reason (failure).

👉 A clean way to summarize:
Pending → Not done yet.
Settled → Done (no longer pending).
Fulfilled → Success.
Rejected → Failure.
*/

//SIMPLIFIED TERMINOLOGY :
// Settled → Promise has produced a result (done).
// Fulfilled / Resolved → Settled successfully.
// Rejected → Settled with failure.
