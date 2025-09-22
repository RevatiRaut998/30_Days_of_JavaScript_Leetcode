// THIS keyword: CALL, APPLY, BIND

// These methods let us control what `this` refers to
// and allow sharing functions between objects.

const student1 = {
  name: "Revati",
  printName: function () {
    console.log(this.name);
  },
};

student1.printName(); // -> Revati

const student2 = {
  name: "Sam",
};

// Using call()
student1.printName.call(student2); 
// -> Sam
// Here, `this` inside printName refers to student2

/* CONCLUSION:
- `call`, `apply`, and `bind` let us explicitly set the value of `this`.
- Useful for borrowing methods from one object and using them on another.
*/

/****************************************************************************************************************/

//Example 2 :

const student7 = {
  name: "Revati",
  printName: function (greeting) {
    console.log(greeting + " " + this.name);
  },
};

const student8 = {
  name: "Sam",
};

// CALL → invokes immediately, pass arguments one by one
student1.printName.call(student7, "Hi"); 
// -> Hi Sam

// APPLY → invokes immediately, pass arguments as an array
student1.printName.apply(student7, ["Hello"]); 
// -> Hello Sam

// BIND → does not run immediately, returns new function
const boundFn1 = student1.printName.bind(student2, "Hey");
boundFn(); 
// -> Hey Sam

/* CONCLUSION:
- call(): invoke now, args listed individually
- apply(): invoke now, args given in an array
- bind(): returns new function, can call later
*/
// Value if this keyword can be modified used CALL, APPLY & BIND fucntions

/****************************************************************************************************************/
