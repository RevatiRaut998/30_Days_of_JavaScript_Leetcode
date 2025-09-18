// ===============================
// 📘 JavaScript DOM (Document Object Model) Notes
// ===============================

// -------------------------------
// 🌍 Window & Document
// -------------------------------

// window = Global object created by browser
// console.log(window.document) → prints entire HTML code
// console.dir(window.document) → prints document object (properties + methods)
// console.dir vs console.log → dir lets us explore properties & methods

// Example:
window.console.log("Hello R");
console.log(window.document);
console.dir(window.document);

// document.body → gives access to <body>
// console.dir(document.body) → body object
// console.log(document.body) → body’s HTML code

// -------------------------------
// 🌱 childNodes
// -------------------------------
// childNodes gives all children of a node (text, elements, comments, etc.)
/*
Example: document.body.childNodes
Output:
   NodeList(9)
   0: text
   1: h1
   2: text
   3: script
   4: text
   5: comment
   6: text
   7: script
   8: text
   length: 9
*/

// -------------------------------
// 🎨 Dynamic Changes
// -------------------------------
// Changing background color at runtime
// document.body.style.background = "blue";

// Changing heading text
// document.body.childNodes[1].innerText = "Changed Heading";

// Best practice: Place <script> before </body> for DOM access

// ===============================
// 🔎 DOM Selection Methods
// ===============================

// -------------------------------
// 1. By ID → document.getElementById("id")
// -------------------------------
let heading = document.getElementById("heading");
console.dir(heading); // h1#heading
// If ID doesn’t exist → null

// -------------------------------
// 2. By Class → document.getElementsByClassName("class")
// -------------------------------
let classData = document.getElementsByClassName("c1");
console.dir(classData);
/*
HTMLCollection(2)
   0: p.c1
   1: button.c1
   length: 2
*/
// If class doesn’t exist → empty collection

// -------------------------------
// 3. By Tag → document.getElementsByTagName("tag")
// -------------------------------
let paras = document.getElementsByTagName("p");
console.dir(paras);
/*
HTMLCollection(2)
   0: p.c1
   1: p.c2
   length: 2
*/

// -------------------------------
// 4. querySelector → Returns FIRST match
// -------------------------------
let firstElement = document.querySelector("p");   // first <p>
let firstClass = document.querySelector(".c1");  // first .c1
let firstId = document.querySelector("#heading");// first #heading

console.dir(firstElement);
console.dir(firstClass);
console.dir(firstId);

// -------------------------------
// 5. querySelectorAll → Returns ALL matches (NodeList)
// -------------------------------
let allElements = document.querySelectorAll("p");
console.dir(allElements);
/*
NodeList(2)
   0: p.c1
   1: p.c2
*/

let allClass = document.querySelectorAll(".c1");
let allId = document.querySelectorAll("#heading");

// ===============================
// 🏷️ Important Properties
// ===============================

// 1. tagName → gives tag name of element node
console.dir(firstElement.tagName); // "P"

// 2. innerText → text of element + children
console.dir(document.querySelector("div").innerText);
/*
Output:
   Catalogue
   Tops
   Bottoms
   Skirts
   Shoes
*/
// Can change at runtime:
// document.querySelector("div").innerText = "Updated Div";

// 3. innerHTML → returns HTML content
console.dir(document.querySelector("div").innerHTML);
/*
Output:
   <h2>Catalogue</h2>
   <ul>
      <li>Tops</li>
      <li>Bottoms</li>
      <li>Skirts</li>
      <li>Shoes</li>
   </ul>
*/
// Can change at runtime:
// document.querySelector("div").innerHTML = "<p>New HTML Tag</p>";

// 4. textContent → gets all text, including hidden elements
let hiddenHeading = document.querySelector("h3");
console.log(hiddenHeading.textContent); // "Hidden Catalogue"

// -------------------------------
// 🌳 DOM Tree Concepts
// -------------------------------
// - Parent / Child / Sibling relationship
// - Types of nodes: Text, Comment, Element
// - We mostly work with Element nodes

// Example:
console.dir(document.body.firstChild);  // first child node (#text usually)
console.dir(document.body.lastChild);   // last child node (e.g. script)
console.dir(document.querySelector("div").children);
/*
HTMLCollection(3)
   0: div
   1: p
   2: input
   length: 3
*/

// ===============================
// 🔄 Manipulating Multiple Elements
// ===============================

/*
let divs = document.querySelectorAll(".class");

// 1. Manual way
divs[0].innerText = "new Unique value 1";
divs[1].innerText = "new Unique value 2";
divs[2].innerText = "new Unique value 3";

// 2. Loop way
let idx = 1;
for (let div of divs) {
   div.innerText = `new unique value ${idx}`;
   idx++;
}
*/

// ===============================
// ✅ End of Notes
// ===============================
