// Promises in JavaScript
//A promise is a container for a future value. It is used to handle asynchronous operations in JavaScript.
//A promise can be in one of three states: pending, fulfilled, or rejected.


//How we wrote code before promises for creating and order and calling payment gateway

const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function(orderId){
  proceedToPayment(orderId);
});
//Here, we passed payment function to create order api and we blindly trusted that create order api will call payment function after creating order
//But what if create order api fails due to some reason, then we will be in trouble as payment function will never be called
//To avoid this problem, we use promises

//How we write code now with promises

const promise = createOrder(cart);
promise.then(function(orderId){
  proceedToPayment(orderId);
});

//In this case, we are attaching a callback fucntion (Payment) to the promise object which will be called when the promise is fulfilled
//There's a difference in passing a function as an argument and attaching a function to a promise object
//In the first case, we are passing a function to another function and we are blindly trusting that the function will be called
//In the second case, we are attaching a function to a promise object and we are sure that the function will be called when the promise is fulfilled

//In second case, the create order api will onyl do its job of creating order, whenever it is done oding that it will populate the promise object with the data for order
//As soon as the promise object is populated, the attached function (payment) will be automatically called with the data of order
//We have the control of our program with us

//Promises gurantees to execute our function as soon as the promise is fulfilled and only execute our function once

//Promise has 2 components: PromiseState and PromiseResult
//PromiseState is initially pending, then it can be either fulfilled or rejected
//PromiseResult is initially undefined, then it can be either value (if fulfilled) or error (if rejected)

//Creating a promise
//Lets fetch user name from github api
//We will be using fetch api to create a promise
//Fetch api is inbuilt api in javascript to make network requests
//It returns a promise object by default

const GITHUB_API="https://api.github.com/users/RevatiRaut998";

const user = fetch(GITHUB_API);

console.log(user); //Promise {<pending>}

//The promise is in pending state, it will be either fulfilled or rejected based on the response from the server
//To handle the response, we can attach a function to the promise object using then method                          
//iN PENDING STATE , PROMISE WILL LOOK LIKE THIS
//Promise {<pending>}
//In FULFILLED STATE , PROMISE WILL LOOK LIKE THIS
//Promise {<fulfilled>: {…}}
//In REJECTED STATE , PROMISE WILL LOOK LIKE THIS
//Promise {<rejected>: {…}}

//As JS waits for none, In CHROME : it will quickly print in console - Promise {<pending>}
// But if you expand it, you will see the fulfilled promise - Promise {<fulfilled>: {…}}
//But in FIREFOX : it will wait for some time and then print the fulfilled promise in console - Promise {<fulfilled>: {…}}

//Now imagine if we have a function to call as soon as the promise is fulfilled

user.then(function(data){
  console.log(data); //Response object
});

//That's how we attach callback function to a promise object
//The function passed to then method will be called as soon as the promise is fulfilled
//The data passed to the function is the response from the server

//Promise object data is immutable, it cannot be changed once it is set
//So, if we try to attach another function to the same promise object, it will be called with the same data
//If someone tries to change the data of the promise object, it will not affect the already attached functions
//This is called immutability of promise object


//To answer in interview: What are promises in JavaScript?
//MDN Definition: A Promise is an object representing the eventual completion or failure of an asynchronous operation.
/*------------------------------------------------------------------------------------------------------------------------------*/

//PROMISE CHAINING in JavaScript

//So far with promises we have resolved the issue of INVERSION OF CONTROL 
//We have one more issue of CALLBACK HELL (PYRAMID OF DOOM) 

//Example of callback hell
 createOrder(cart, function(orderId){
  proceedToPayment(orderId, function(paymentInfo){
    showOrderSummary(paymentInfo, function(){
      updateWalletBalance(function(){
        sendEmail(function(emailStatus){
          console.log(emailStatus);
        });
      });
    });
  });
});
//This is called callback hell or pyramid of doom

//This can be handled with promises, Promises come with chaining
/*Now , we can rewrite initial promise example 

const promise = createOrder(cart);
promise.then(function(orderId){
  proceedToPayment(orderId);
});

*/
createOrder(cart)
.then(function(orderId){
  return proceedToPayment(orderId);
})
.then(function(paymentInfo){
  return showOrderSummary(paymentInfo);
})
.then(function(){
  return updateWalletBalance();
})
.then(function(){
  return sendEmail();
})
.then(function(emailStatus){
  console.log(emailStatus);
});

// we use return keyword to return the promise object from the function
//This is called promise chaining

//Using arrow functions we can write it as
createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(() => updateWalletBalance())
.then(() => sendEmail())
.then(emailStatus => console.log(emailStatus));


//But still this is not the best way to write code
//To make it better, we use Async Await

/*------------------------------------------------------------------------------------------------------------------------------*/





