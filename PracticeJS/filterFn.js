/*-------------------------------------------------------------------------------------------------------------------------------------*/
//Using filter function
//filter function creates a new array by filtering out elements that do not meet a certain condition.
//It does not change the original array.
//syntax: array.filter(function(currentValue, index, arr), thisValue)

const numbers = [5, 1, 3, 6, 9, 4, 2, 8, 7, 10];

//Filter odd numbers from array

function isOdd(x) {
  return x % 2;
}

const oddNumbers = numbers.filter(isOdd);

console.log(oddNumbers);
//output: [5, 1, 3, 9, 7]

//You can directly write the function inside filter
//const oddNumbers = numbers.filter(function(x){ return x%2;});

//You can directly write arrow function inside filter
//const oddNumbers = numbers.filter((x) => x%2);

/*-------------------------------------------------------------------------------------------------------------------------------------*/

//Filter even numbers from array

function isEven(x) {
  return x % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);
//output: [6, 4, 2, 8, 10]

//You can directly write the function inside filter
//const evenNumbers = numbers.filter(function(x){ return x%2===0;});

//You can directly write arrow function inside filter
//const evenNumbers = numbers.filter((x) => x%2===0);

/*-------------------------------------------------------------------------------------------------------------------------------------*/

//Filter numbers greater than 5 from array

function isGreaterThanFive(x) {
  return x > 5;
}

const greaterThanFive = numbers.filter(isGreaterThanFive);

console.log(greaterThanFive);
//output: [6, 9, 7, 10]

//You can directly write the function inside filter
//const greaterThanFive = numbers.filter(function(x){ return x>5;});

//You can directly write arrow function inside filter
//const greaterThanFive = numbers.filter((x) => x>5);

/*-------------------------------------------------------------------------------------------------------------------------------------*/

//Simple Examples :

//Return even values from array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = arr.filter((val) => {
  return val % 2 === 0; //even value
});
console.log(newArr); //Output : [2, 4, 6, 8, 10]

//Get age>12 from array
let student = [
  { name: "Jay", age: 10 },
  { name: "Sam", age: 15 },
  { name: "Dave", age: 18 },
];

let nameArr = student.filter((val) => {
  return val.age > 12;
});

console.log(nameArr); // Output : 0 : {name: 'Sam', age: 15}
//                                1 : {name: 'Dave', age: 18}
