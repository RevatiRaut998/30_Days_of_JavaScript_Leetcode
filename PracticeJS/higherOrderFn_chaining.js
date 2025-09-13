// Complex example:
// Using map, filter, reduce and chaining

//For example :

const users=[
  {firstName:'Revati',lastName:'raut',age:27},
  {firstName:'David',lastName:'Lee',age:23},
  {firstName:'Zain',lastName:'Roy',age:50},
  {firstName:'Aryan',lastName:'Sen',age:75},

];

//Find list of Full names for above Array
const fullName = users.map(x => x.firstName+x.lastName);

console.log(fullName);
//Output : ['Revati raut', 'David Lee', 'Zain Roy', 'Aryan Sen']

/*----------------------------------------------------------------------------------------------------------------*/

//Find all users above age 30
const above30 = users.filter(x => x.age > 30);  

console.log(above30);
//Output : [{firstName:'Zain',lastName:'Roy',age:50}, {firstName:'Aryan',lastName:'Sen',age:75}]  

/*----------------------------------------------------------------------------------------------------------------*/

//Find the average age of users
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length; 

console.log(averageAge);
//Output : 43.75

/*----------------------------------------------------------------------------------------------------------------*/
//Find how many users are there of each age
//For example :
const students=[
  {firstName:'Revati',lastName:'raut',age:27},
  {firstName:'David',lastName:'Lee',age:23},
  {firstName:'Zain',lastName:'Roy',age:50},
  {firstName:'Aryan',lastName:'Sen',age:27},

];

//Find how many people belong to same or diff age and display 

const outputAge = students.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age]= ++acc[curr.age];
  }else {
    acc[curr.age] = 1;
  }
  return acc
},{});


console.log(outputAge);
//Output : { '23': 1, '27': 2, '50': 1 }


//Initial value of acc is an empty object {}
//curr is each student object from students array
//We are creating a key value pair in acc object where key is age and value is count of that age
//Here, in outputAge : if condition, we are checking if the age already exists in the accumulator object (acc). 
// If it does, we increment the count for that age by 1. 
// If it doesn't exist, we initialize the count for that age to 1 in the else block.
// Output sequence is not guaranteed as object key order is not maintained in JavaScript.
// If you want to maintain order, consider using a Map instead of a plain object.

/*----------------------------------------------------------------------------------------------------------------*/
//Filter, Chaining and Reduce example: 

//For example :
const students1=[
  {firstName:'Revati',lastName:'raut',age:27},
  {firstName:'David',lastName:'Lee',age:23},
  {firstName:'Zain',lastName:'Roy',age:50},
  {firstName:'Aryan',lastName:'Sen',age:27},

];

//To Find people who are below age 30 , Filter function - 

const below30 = students1.filter(x => x.age<30);

console.log(below30);
/*Output : [{firstName:'Revati',lastName:'raut',age:27}, 
            {firstName:'David',lastName:'Lee',age:23}, 
            {firstName:'Aryan',lastName:'Sen',age:27}] */

/*----------------------------------------------------------------------------------------------------------------*/

//To Find first names of people who are below age 30 , Filter + Map function/ Chaining

const below30FirstName = students1.filter(x => x.age<30).map(x => x.firstName);

console.log(below30FirstName);
//Output : ['Revati', 'David', 'Aryan']

/*----------------------------------------------------------------------------------------------------------------*/

//Using just Reduce to get this same result

const below30Reduce = students1.reduce((acc,curr) => {
  if(curr.age<30){
    acc.push(curr.firstName);
  }
  return acc;
},[]);

console.log(below30Reduce);
//Output : ['Revati', 'David', 'Aryan']

/*----------------------------------------------------------------------------------------------------------------*/
//Find list of people who are less than age 30 and sort them by their first name
const below30Name = students1.filter(x => x.age < 30).sort((a, b) => a.firstName.localeCompare(b.firstName));

console.log(below30Name);
//Output : [{firstName:'David',lastName:'Lee',age:23}, {firstName:'Revati',lastName:'raut',age:27}]
//Here, localeCompare is used to sort strings in alphabetical order


/*----------------------------------------------------------------------------------------------------------------*/

//Summary :
// map() - Transforms each element in an array and returns a new array with the transformed elements.
// filter() - Filters elements in an array based on a condition and returns a new array with the elements that satisfy the condition.
// reduce() - Reduces an array to a single value by applying a function to each element and accumulating the result.
// Chaining - Combining multiple array methods together to perform complex operations in a concise manner.

// sort() - Sorts the elements of an array in place and returns the sorted array.
// localeCompare() - Compares two strings in a locale-aware manner and returns a number indicating their relative order.
// push() - Adds one or more elements to the end of an array and returns the new length of the array.
// Accumulator (acc) - A variable used in reduce() to accumulate the result of the reduction operation.
// Current Value (curr) - The current element being processed in the array during the reduce() operation.
// Initial Value - The starting value for the accumulator in the reduce() method.
// Key-Value Pair - A pair of related data where a key is associated with a specific value, often used in objects or maps.
/*----------------------------------------------------------------------------------------------------------------*/