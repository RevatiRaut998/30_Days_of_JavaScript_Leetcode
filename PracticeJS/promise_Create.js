//Creating a Promise (From Scratch) in JavaScript
//Summary : This code demonstrates how to create and use a Promise in JavaScript.

//Example 1
const cart = ['shoes', 'pants', 'kurta'];
const promise = createOrder(cart); //orderId is output

promise.then(function(orderId){
  // proceedToPayment(orderId); //paymentInfo is output
  console.log(orderId);
})
.catch(function(err){
console.log(err.message);
}) //If our promise fails/is rejected this will be invoked
// This is gracefully handling rejection of a promise, youc an add a pop-up as well


///To create Promise, Producer end

function createOrder(cart){
  const pr = new Promise(function(resolve,reject){
        // createOrder
        // validateCart
        // API Call to make an order, DB call will probably give OrderId if successfull or error if it fails
        if(!validateCart(cart)){
          const err = new Error('Cart is not valid');  
          reject(err);
        }
        // Logic for create Order
        const orderId = "12345" ; //Ideally a DB call or something to get orderId, here I have used dummy data
        if(orderId){
          //If we have some delay , how actually it is solved
          setTimeout(function(){
              resolve(orderId);
          },5000);
          
        }             
  });

  return pr;
}

function validateCart(cart){
  return false; //to reject a promise
  //return true; //You can add validation for empty cart, items check , etc
}
