//Promise Chaining in JavaScript

//Example 1
const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
.then(function(orderId){
  console.log(orderId);
  return orderId;
})
.then(function(orderId){
 return proceedToPayment(orderId); //paymentInfo is output
})
.then(function(paymentInfo){
  console.log(paymentInfo);        //Output : { orderId: '12345', status: 'success' }
})
.catch(function(err){             //This catch will handle any n all errors in the above chain i.e top of this catch block
console.log(err.message);
})  
.then(function(){
  console.log('No matter what happens this .then function will def be called after Catch');
})                               //The above catch will handle all errors but after catch whatever is there will be executed


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
 // return false;               //to reject a promise
  return true;                  //You can add validation for empty cart, items check , etc
}

function proceedToPayment(orderId){
  // Simulate payment processing
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      const paymentInfo = {
        orderId: orderId,
        status: 'success'
      };
      resolve(paymentInfo);
    }, 3000);
  });
}