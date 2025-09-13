/*-----------------------------------------------------------------------------------------------------------------------*/

//Using reduce function
//reduce function reduces the array to a single value by executing a reducer function on each element of the array.
//It does not change the original array.
//syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const nums = [5, 1, 3, 2, 6];


//To get sum of array elements

//Normal Way - 

function findSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

console.log(findSum(nums));

//How to write a reduce function for above example :
//Syntax for reduce function : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


//HERE , Syntax for Reduce : Array.reduce(function(accumulator,currentvalue){logic for reduce},initial value to start with)
//Here accumulator is sum and currentvalue is each element of array
//initial value to start with is 0

//You can directly write the function inside reduce

const output = nums.reduce(function(acc,curr){
  acc = acc + curr;
  return acc;
},0)

console.log(output);
//output: 17

//You can directly write arrow function inside reduce
//const output = nums.reduce((acc,curr) => acc+curr ,0);

/*-------------------------------------------------------------------------------------------------------------------------------------*/

//To find maximum element in array

//Normal Way -  
function findMax(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

console.log(findMax(nums));
//output: 6

//How to write a reduce function for above example :
//Syntax for reduce function : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//HERE , Syntax for Reduce : Array.reduce(function(accumulator,currentvalue){logic for reduce},initial value to start with)
//Here accumulator is max and currentvalue is each element of array
//initial value to start with is first element of array i.e. nums[0]

const maxOutput = nums.reduce(function(max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, nums[0]);

console.log(maxOutput);
//output: 6

//You can directly write arrow function inside reduce
//const maxOutput = nums.reduce((max,curr) => curr > max ? curr : max ,nums[0]);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
