// THIS Keyword : ARROW, NESTED ARROW Function AND DOM

// Arrow functions do not have their own this , they take the value of their lexical env where they are enclosed

// Arrow function do not provide thier own this binding, the value of this keyword is value of enclosing lexical context

const obj = {
  a: 10,
  x: () => {
    // X is an arrow function
    console.log(this); // Enclosing lexical context
  },
};

obj.x(); // OUTPUT : WINDOW OBJECT
// Here,  value of this will not be the obj but its enclosed in lexical context
// Here , this will not behave like it is present in method of obj, it wil behave like its present in global context

// It behaves like it's written outside of object :
console.log(this); // OUTPUT : WINDOW OBJECT

/*************************************************************************************************************************************************************** */

//Example 2 : NESTED ARROW FUNCTION

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      // this arrow function is enclosed in a method x which is inside obj2
      console.log(this);
    };
    y();
  },
};
obj2.x(); //OUTPUT : {a:20,x:f}

//As prevosuly discussed, this keyword in arrow function takes value of its enclosed lexical context
//In this case, this it is enclosed inside the function x, so its taking its lexical context and printing {a:20,x:f} in console

// It behaves like it's written in fucntion x itself : as if arrow function is not used here

const obj3 = {
  a: 10,
  x: function () {
    console.log(this); //it will behave like this
    // const y = ()=> {
    // console.log(this);
    // }
    // y()
  },
};
obj3.x();

/****************************************************************************************************************************************************************************** */

//THIS KEYWORD : DOM

//html file code

/*
<button onclick="alert(this)">Click Me</button>
*/

//Here, value of this keyword- will be the reference to button element
// this : value is reference to html element

/******************************************************************************************************************************************************************************/

// THIS KEYWORD behaves differently in JavaScript CLASS , CONSTRUCTORS ,
