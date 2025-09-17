/*-------------------------------------------------------------------------------------------------------------------------------------*/
//Using map function
//map function creates a new array by performing a function on each array element.
//It does not change the original array.
//syntax: array.map(function(currentValue, index, arr), thisValue)

const arr = [5, 1, 3, 6, 9];

//To double value of array
function double(x) {
  return x * 2;
}

const abc = arr.map(double);

//You can directly write the function inside map
//const abc = arr.map(function(x){ return x*2;});

//You can directly write arrow function inside map
//const abc = arr.map((x) => x*2);

console.log(abc);
//output: [10, 2, 6, 12, 18]

/*-------------------------------------------------------------------------------------------------------------------------------------*/

//To triple value of array

function triple(x) {
  return x * 3;
}

const tri = arr.map(triple);

//You can directly write the function inside map
//const tri = arr.map(function(x){ return x*3;});

//You can directly write arrow function inside map
//const tri = arr.map((x) => x*3);

console.log(tri);
//output: [15, 3, 9, 18, 27]

/*-------------------------------------------------------------------------------------------------------------------------------------*/

//To convert array elements to binary
//toString(2) converts a number to binary

function binary(x) {
  return x.toString(2);
}

const binaryArr = arr.map(binary);

//You can directly write the function inside map
//const binaryArr= arr.map(function(x){ return x.toString(2);});

//You can directly write arrow function inside map
//const binaryArr= arr.map((x) => x.toString(2));

console.log(binaryArr);
//output: ['101', '1', '11', '110', '1001']

/*-------------------------------------------------------------------------------------------------------------------------------------*/

//Simple examples:
let num = [1, 2, 3, 4, 5, 6];

num.map((val) => {
  console.log(val);
});


//To get map to return the array itself

let newArray = num.map((val) => {
  return val;
});
console.log(newArray);

// To get square array as output
let squareArr = num.map((val) => {
  return val*val;
});
console.log(squareArr);
