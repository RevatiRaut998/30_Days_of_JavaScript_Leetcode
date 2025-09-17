//Examples of Arrow function

//Multiply 2 params
const multiply = (a, b) => {
  return a * b;
};
multiply(3, 5);

//Get count of vowels in a string input
const countVowels = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};

//Calculate Square
let num = [1, 2, 3, 4, 5, 6];
num.forEach((val) => {
  console.log(val * val); //// square = val**2
});

//It can also be written as :
let calculateSquare = (val) => {
  console.log(val * val);
};

num.forEach(calculateSquare);

// Take an input of  number form user, Create an array of numbers from 1 to n

let Input = 5;

let OutputArray = (Input) => {
  let i = 1;
  let output = [];
  while (i <= Input) {
    output.push(i);
    i++;
  }
  return output;
};

console.log(OutputArray(Input));


//Another approach -
let output = [];
let n = 5;

let outputArray = (n) => {
  for (let i = 1; i <= n; i++) {
    output.push(i);
  }
  return output;
};

console.log(outputArray(n));

//Final approach with input prompt

let num1 = Number(prompt('Enter a number:'));
let arr=[];
for(let i=1; i<= num1 ;i++){
  arr[i-1] = i;
}
console.log(arr);