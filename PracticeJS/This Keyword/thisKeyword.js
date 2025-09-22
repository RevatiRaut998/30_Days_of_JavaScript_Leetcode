// THIS KEYWORD

// In global space
console.log(this); 
// -> In browsers: 'window' (global object)
// -> In Node.js: 'global'

// Inside a function
function x() {
  console.log(this);
}
x();
// -> Non-strict mode: 'this' is substituted with global object (window in browsers)
// -> Strict mode: 'this' is undefined

// NOTE: "this substitution" happens only in non-strict mode.
// If 'this' would otherwise be undefined, JS substitutes it with the global object.

// Function call examples:
x();          // -> window (non-strict) | undefined (strict)
window.x();   // -> window (always in browsers)


/*********************************************************************************************************************************************************************************************/

/* SUMMARY:

1. In the global scope:
   - Browser: `this` === window
   - Node.js: `this` === global

2. Inside a normal function:
   - Strict mode:
       x();        // this === undefined
       window.x(); // this === window        VALUE OF THIS DEPENDS ON HOW THE FUNCTION IS CALLED
   - Non-strict mode:
       x();        // this === window (this substitution)
       window.x(); // this === window

3. "This substitution":
   - In non-strict mode, if `this` would be undefined, it is automatically replaced with the global object.
   - This does not happen in strict mode.
*/

/***********************************************************************************************************************************************************************************************/

// THIS inside an object's method

// If a function is defined inside an object, it’s called a METHOD.
// In that case, `this` refers to the object on which the method is called.

const obj = {
  a: 10,
  x: function() {
    console.log(this);   // -> { a: 10, x: f }
    console.log(this.a); // -> 10
  }
};

// How the function is called determines `this`:
obj.x(); 
// -> `this` === obj

/* CONCLUSION:
Inside an object’s method, this refers to the object the method belongs to.
The value of this is always based on how the function is called, not where it is defined.
*/