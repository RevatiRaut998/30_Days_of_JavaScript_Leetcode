//Async Await in JavaScript
//Async Await is a syntactic sugar over promises
//It makes the code look synchronous, but it is asynchronous under the hood
//It is easier to read and write
//It is built on top of promises
//It is available in ES8
//To use async await, we need to use async keyword before the function to wait for the promise to be fulfilled
//We need to use await keyword before the promise object
//The function with async keyword returns a promise object
//The await keyword can only be used inside the async function
//We can use try catch block to handle errors

//Async function will always return a promise
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved value!!");
});

async function getData() {
  // return 'Namaste';
  return p; //If we are returning an existing promise in return from async function it will not wrap it up in another promise, only 1 rpomise will be returned
}

const dataPromise = getData();
console.log(dataPromise);

//dataPromise.then((res) => console.log(res));
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//AWAIT

//Async and await are used to handle Promises
//Await can only be used inside an Async function
// You write await infront of a promsie and it resolves the promise

//How we handled promise before async await

function getData() {
  p.then((res) => console.log(res));
}

getData(); //In console we will have value Promise Resolved value!!

//If we have to use async await to handle same promise , this is how we do it

async function handlePromise() {
  const val = await p;
  console.log(val);
}

handlePromise();

//Fresh example for Promise: where it takes longer to get response

const r = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved after 5 seconds!!");
  }, 5000);
});

const t = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("T Resolved after 15 seconds!!");
  }, 15000);
});
async function handleRPromise() {
  console.log(
    "Does this need to wait for promise to resolve? No, it will quickly be printed"
  );
  const valR = await r;
  console.log(
    "JS Engine is waiting for promise to resolve because we are inside Async"
  ); // If this would have been a normal function or promise the JS engine would execute this console.log without delay , here it is waiting for promise to be resolved
  console.log(valR); // Code will be executed after 5 seconds delay , not wait for t for 15 seconds

  // What happens if I add one more variable for await , will it wait twice?
  const valR2 = await r;
  console.log(
    "Is this getting printed, or waiting twice? It is printed once the first await time is up"
  );
  console.log(valR2 + "Second Await Variable"); //Code will be executed after 5 seconds as we are using same await r

  //What happens if there are 2 promises? will it execute both then print? What will be printed when?
  const varT = await t;
  console.log(
    "Is this waiting for 5 seconds for r? or for 15 seconds for t? Or all of it is printed at 5 or 15?"
  ); // Output: This will be printed after 15 seconds only
  console.log(varT); // This will be printed after 15 seconds
}
handleRPromise();

// NOTE : Await inside Async fn follows order of execution line by line beacuse JS is a single threaded synchronous language ,
//Example cases:
// 1. If the delays are [5, 10, 15], the function will wait sequentially:
//    → first 5s, then +10s, then +15s (total ~30s).
// 2. If the delays are [10, 5], the function will first wait 10s.
//    By the time it reaches the second await, the 5s delay has already finished,
//    so the total time is ~10s.
// 3. If the delays are [15, 5, 20], the function will wait 15s first.
//    By then, the 5s delay has already resolved, so that completes immediately.
//    Then it waits another 20s. Total time ~35s.

//Also , async/await does not block the call stack like a synchronous function would.

//Here’s what really happens step by step:
//When an async function hits an await, JavaScript pauses that function’s execution, but it does not freeze or block the entire call stack.
//The await expression hands control back to the event loop. While the promise is pending, JS is free to run other tasks (like handling user input, timers, or other callbacks).
//Once the promise resolves, the async function resumes execution — specifically, the rest of that function is put into the microtask queue. The event loop then picks it up as soon as the current stack is clear.
//So the call stack is not blocked. It only seems “paused” inside that one async function. The rest of your program can keep executing normally.

/*
1. When you await a promise, the async function is suspended.
- The function itself is popped off the call stack.
- The rest of its code (after the await) is wrapped into a continuation and scheduled to run later.

2.While the promise is still pending, nothing sits in the task queue or microtask queue yet. The promise is being resolved “outside” JS — in some underlying environment (like the browser’s Web APIs or Node’s libuv).

3.Once the promise resolves, the thenable reaction (the continuation after the await) is put into the microtask queue (also called the “jobs queue”).

4. The event loop will then:
- Finish whatever is on the call stack right now.
- Empty the entire microtask queue before moving on to the next macro task.
- That’s when your async function resumes after await.

So the answer:
👉 The async function doesn’t “sit” in the queue while waiting. It’s suspended. Once the promise resolves, its continuation is placed in the microtask queue.
*/

/*-----------------------------------------------------------------------------------------------------------------------------------*/

// Real Async example with Fetch API

const API_URL = "https://api.github.com/users/RevatiRaut998";

async function fetchPromise() {
  const apiData = await fetch(API_URL);

  // Fetch function is a promise, it gives a response which is a readable stream.
  // If you have to understand this readable stream , we need to covert it to JSON.
  // This JSON is also a promise , once this JSON promise is resolved it will give you the result
  // fetch() => Response.json() => jsonValue

  const jsonValue = await apiData.json();

  //Here jsonValue holds the result of json
  //This is how we get data from a fetch function
  //Normally we write fetch as : fetch().then(res => res.json()).then(res => console.log())
  /*fetch("https://api.example.com/data")
      .then(res => res.json())
      .then(data => console.log(data))
*/
  console.log(jsonValue);
}

fetchPromise();

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//Error Handling

//We have a try ctach for error handling
//Example :

const urlUser = "https://api.githb.com/users/RevatiRaut998";

async function errorHandling() {
  try {
    const urlData = await fetch(urlUser);
    const jsonData = await urlData.json();
    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}

errorHandling();


// Older way of handling error :
// errorHandling().catch(err => console.log(err));


/*---------------------------------------------------------------------------------------------------------------------------------*/

// Async await vs Promise.then/.catch

// async await is just syntactic sugar over promises, 
// Javascript treats it the same in background its just syntax
// In Async await you don't have to do promise chaining, its easier for some to read
 
