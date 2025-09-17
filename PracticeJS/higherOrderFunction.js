/*Functional programming concept : Passing function as a parameter

- Calculate area, circumference and diameter of a circle
- calculate is higher order function
A higher order function takes and input function and returns a new function.
This is a very powerful concept as it allows us to abstract away 
repetitive code patterns and replace them with more generic functions.
- area is callback function
The function that is passed to a higher order function as an argument
is called a callback function.
This is useful when we want to create utility functions that can be used
in different scenarios by passing different callback functions.

- This is an Example of modularity and reusability of code

- Functional programming is a programming paradigm where you build software by 
composing pure functions, avoiding shared state, mutable data, and side-effects.
- In functional programming, functions are first-class citizens, meaning 
they can be assigned to variables, passed as arguments to other functions, 
and returned from other functions.
*/


const radius = [3,4,5,6];

const area = function(radius){
return Math.PI*radius*radius
};
const circumference = function(radius){
return 2*Math.PI*radius;
};
const diameter=function(radius){
return 2*radius;
};

const calculate = function(radius, logic){
    const output=[];
    for(i=0;i<radius.length;i++){
     output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

//Map function for same example
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));


//To replicate exact map function
Array.prototype.calculate = function(logic){
    const output=[];
    for(i=0;i<this.length;i++){
     output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

/***********************************************************************************************************/


//For each method in JS - can only be used for arrays  not strings - Hihgher order method
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val);
});

//Same in Array function because we use array function for for each

let arr1 = [6, 7, 8, 9, 10];
arr1.forEach((val) => {
  console.log(val);
});

//Actual syntax of for each callback has params of - value, index and array
//Example:
let arr2 = ["pune","delhi","mumbai"];
arr2.forEach((val, index,arr2) => {
  console.log(val.toUpperCase(),index,arr2);
});
