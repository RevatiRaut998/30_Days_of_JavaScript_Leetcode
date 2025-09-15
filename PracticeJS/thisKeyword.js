//THIS KEYWORD


// this in global space

console.log(this);

//In console you will see  - Window object | Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//this keyword in global space represents global object
// In case of browser the global object is Window hence why you see window object
// in other places it will be global object - it can be window, global or nayhting else depending on where youre running javascript

function x(){
  console.log(this); // the value depends on strict/non strict mode (undefined/window)
}
x();

// Inside a function when you use this in non strict mode - it prints another window object in console but its diff than the global one
// this behaves differently in strict n non strict code
// so when we have 'use strict' added at top of the js file and we use console.log(this) inside a function it will print UNDEFINED in console


// NOTE : this substitution - if value of this keyword is undefined or null , this will be replaced with global object 
// only in non strict mode this substitution happens

//Question - What is the value of this keyword in a function
//In Interviews say this - Value of this in function is undefined but beacuse JS has this substitution - so the value becomes equal to global object if strict mode is not used

// Value of this keyword also depends on how the function is called

x();// => value will be window object in non strict mode
// in strict mode it will be undefined

//If yu execute function like :
window.x() //=> value will be window object

//If the function is called without any reference of an object then the value is undefined (Example - x();)
// if its called with reference (Ex: window.x()), value will be window object

