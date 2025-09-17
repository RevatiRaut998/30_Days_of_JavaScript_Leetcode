// 📘 JSON in JavaScript: JSON.parse vs JSON.stringify

// What is JSON?
// - JSON (JavaScript Object Notation) is a text-based format for representing data.
// - It looks like JavaScript objects/arrays, but is always a string when stored or transferred.
// - Commonly used for APIs, configs, and data exchange.

/****************************************************************************************************************************************/

// JSON.parse() → takes a JSON string and converts it into a real
// JavaScript value (object, array, number, string, boolean, etc).

// JSON.stringify() → takes a JavaScript value (object/array/primitive)
// and converts it into a JSON string.

// Quick demo:

// JavaScript object (value)
let user = { name: "Reva", age: 27 };

// Convert JS → JSON string
let str = JSON.stringify(user);
console.log(str);
// {"name":"Reva","age":27}   <-- JSON format (string)

// Convert JSON string → JS object
let backToObj = JSON.parse(str);
console.log(backToObj);
// { name: "Reva", age: 27 }  <-- JavaScript object again

// -------------------------------------------------------------
// ✅ One-liner memory trick:

// parse = JSON → JS value
// stringify = JS value → JSON
// -------------------------------------------------------------

/****************************************************************************************************************************************/

// -------------------------------------------------------------
// 1. JSON.parse()
// Purpose: Converts a JSON string → JavaScript object/array
// -------------------------------------------------------------

let jsonString = `{
  "name": "Reva",
  "age": 27,
  "skills": ["JavaScript", "Angular", "TypeScript"]
}`;

let obj = JSON.parse(jsonString);

console.log("Using JSON.parse:"); //Just headline for console
console.log(obj.name); // "Reva"
console.log(obj.age); // 27
console.log(obj.skills[1]); // "Angular"

//Input: string (must be valid JSON)
// Output: JS object/array you can work with

// -------------------------------------------------------------
// 2. JSON.stringify()
// Purpose: Converts a JavaScript object/array → JSON string
// -------------------------------------------------------------

let obj2 = {
  name: "Reva",
  age: 27,
  skills: ["JavaScript", "Angular", "TypeScript"],
};

let jsonString2 = JSON.stringify(obj2);

console.log("\nUsing JSON.stringify:"); //Just headline for console
console.log(jsonString2);
// Output: {"name":"Reva","age":27,"skills":["JavaScript","Angular","TypeScript"]}

//Input: JS object/array
// Output: JSON string (safe to store/send over network)

// -------------------------------------------------------------
// 3. Common Use Case (with localStorage)
// -------------------------------------------------------------

//When working with APIs or localStorage:
// Save to localStorage (must be string)
localStorage.setItem("user", JSON.stringify(obj2));

// Retrieve and parse back into an object
let savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "Reva"

// -------------------------------------------------------------
// 🔑 Key Differences
// - JSON.parse: read JSON into JavaScript.  (JSON string → JS object (reading data))
// - JSON.stringify: JS object → prepare JS data to send/store as JSON. (JSON string (saving/sending data))
// -------------------------------------------------------------

/**
| Feature   | `JSON.parse()`          | `JSON.stringify()`      |
| --------- | ----------------------- | ----------------------- |
| Direction | JSON string → JS object | JS object → JSON string |
| Input     | String                  | Object/Array            |
| Output    | Object/Array            | String                  |
| Use Case  | Reading data            | Saving/sending data     |

 */

/**********************************************************************************************************************************/

// -------------------------------------------------------------
// Example 2: Working with JSON.parse and JSON.stringify
// -------------------------------------------------------------

// A JSON string (as you might get from an API response)
let jsonString3 = `{
  "product": "Laptop",
  "price": 75000,
  "inStock": true,
  "specs": {
    "cpu": "Intel i7",
    "ram": "16GB",
    "storage": "512GB SSD"
  },
  "tags": ["electronics", "computers", "portable"]
}`;

// -------------------- JSON.parse --------------------
// Convert JSON string → JavaScript object
let productObj = JSON.parse(jsonString3);

console.log("Using JSON.parse:"); //Just headline for console
console.log(productObj); // Whole object
console.log(productObj.product); // "Laptop"
console.log(productObj.specs.ram); // "16GB"
console.log(productObj.tags[1]); // "computers"

// -------------------- JSON.stringify --------------------

// Convert JavaScript object → JSON string
let jsonAgain = JSON.stringify(productObj);

console.log("\nUsing JSON.stringify:"); //Just headline for console
console.log(jsonAgain);
// Output: {"product":"Laptop","price":75000,"inStock":true,"specs":{"cpu":"Intel i7","ram":"16GB","storage":"512GB SSD"},"tags":["electronics","computers","portable"]}

// -------------------------------------------------------------
// Summary:
// - JSON.parse: Turns string data into a real object (we can access props).
// - JSON.stringify: Turns object back into string (for storing/sending).
// -------------------------------------------------------------
