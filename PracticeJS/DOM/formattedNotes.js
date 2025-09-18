// ====================================================================
// DOM (Document Object Model) - Complete Study Notes
// ====================================================================

// ====================================================================
// 1. INTRODUCTION TO DOM
// ====================================================================

// DOM is a programming interface for web documents
// It represents the HTML document as a tree structure of objects
// JavaScript can access and modify the DOM to create dynamic web pages

// alert("Welcome to Document Object Model");
console.log("Hello");
// alert("Hello");

// The 'window' object is the global object created by the browser
window.console.log("Hello R"); 

// Accessing the document object - represents the entire HTML page
console.log(window.document); // Prints HTML code in console
console.dir(window.document); // Shows document object properties and methods

// DIFFERENCE: console.dir vs console.log
// - console.log: Prints the element/HTML code
// - console.dir: Shows object properties and methods for inspection

console.dir(document.body); // Shows body object with properties/methods
console.log(document.body); // Shows HTML code of body element

// ====================================================================
// 2. DOM TREE STRUCTURE & CHILD NODES
// ====================================================================

// childNodes - Shows all child nodes inside a parent node
// Example: Inside body node, childNodes might include:
/*
   childNodes: NodeList(9)
    0: text        (whitespace/line breaks)
    1: h1          (heading element)
    2: text        (whitespace)
    3: script      (script element)
    4: text        (whitespace)
    5: comment     (HTML comments)
    6: text        (whitespace)
    7: script      (another script)
    8: text        (whitespace)
    length: 9
*/

// ====================================================================
// 3. DYNAMIC DOM MANIPULATION EXAMPLES
// ====================================================================

// Changing styles dynamically
// document.body.style.background = "blue"; // Changes background color

// Changing content dynamically
// document.body.childNodes[1].innerText = "Changed Heading"; // Updates heading text

// IMPORTANT: Include script tags before closing </body> tag
// If script is in <head>, DOM elements may not be accessible yet

// ====================================================================
// 4. DOM ELEMENT SELECTION METHODS
// ====================================================================

// METHOD 1: Selecting by ID
// Returns a single element or null if not found
let heading = document.getElementById("heading");
console.dir(heading); // Output: h1#heading
// If ID doesn't exist, returns null

// METHOD 2: Selecting by Class Name
// Returns HTMLCollection (live collection)
let classData = document.getElementsByClassName("c1");
console.dir(classData);
/*
Output: HTMLCollection(2) 
    0: p.c1
    1: button.c1
    length: 2    
*/
console.log(classData); // Output: HTMLCollection(2) [p.c1, button.c1]
// If class doesn't exist, returns empty HTMLCollection

// METHOD 3: Selecting by Tag Name
// Returns HTMLCollection of all elements with specified tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
/* 
Output: HTMLCollection(2)
    0: p.c1
    1: p.c2
    length: 2
*/

// ====================================================================
// 5. QUERY SELECTORS (MODERN APPROACH)
// ====================================================================

// Query selectors return NodeList (static collection)
// More flexible - can use CSS selector syntax

// METHOD 1: querySelector() - Returns FIRST matching element
// Can select by: tag, class (.className), id (#idName), or any CSS selector

// Selecting by tag
let firstElement = document.querySelector("p");
console.dir(firstElement); // Output: p.c1 (first p tag only)

// Selecting by class (use . prefix)
let firstClass = document.querySelector(".c1");
console.dir(firstClass); // Output: p.c1 (first element with class c1)

// Selecting by ID (use # prefix)
let firstId = document.querySelector("#heading");
console.dir(firstId); // Output: h1#heading
console.log(firstId); // Output: <h1 id="heading">Welcome to JS Practice</h1>

// METHOD 2: querySelectorAll() - Returns ALL matching elements as NodeList
let allElements = document.querySelectorAll("p");
console.dir(allElements);
/*
Output: NodeList(2)
    0: p.c1
    1: p.c2
    length: 2
*/

let allClass = document.querySelectorAll(".c1");
console.dir(allClass);
/*
Output: NodeList(2)
    0: p.c1
    1: button.c1
    length: 2
*/

let allId = document.querySelectorAll("#heading");
console.dir(allId);
/*
Output: NodeList(2)
    0: h1#heading
    1: h2#heading
    length: 2
*/

// ====================================================================
// 6. IMPORTANT DOM PROPERTIES
// ====================================================================

// PROPERTY 1: tagName
// Returns the tag name of element nodes (always uppercase)
console.dir(firstElement.tagName); // Output: "P"

// PROPERTY 2: innerText
// Returns/sets the visible text content of element and all children
// Ignores hidden elements and HTML tags
console.dir(document.querySelector("div").innerText);
/*
Example Output:
    Catalogue
    Tops
    Bottoms
    Skirts
    Shoes
*/
// For a structure like: div > h2, ul > li, li, li
// innerText returns all visible text content

// Modifying content with innerText:
// document.querySelector("div").innerText = "Updated Div";

// PROPERTY 3: innerHTML
// Returns/sets the HTML content inside the element
// Includes all HTML tags and formatting
console.dir(document.querySelector("div").innerHTML);
/*
Example Output:
  <h2>Catalogue</h2>
      <ul>
        <li>Tops</li>
        <li>Bottoms</li>
        <li>Skirts</li>
        <li>Shoes</li>
      </ul>
*/

// Modifying content with innerHTML:
// document.querySelector("div").innerHTML = "<p>New HTML Tag</p>";

// PROPERTY 4: textContent
// Returns/sets text content including hidden elements
// Similar to innerText but shows hidden content too
let hiddenHeading = document.querySelector("h3");
console.log(hiddenHeading.textContent); // Output: "Hidden Catalogue"

// ====================================================================
// 7. DOM TREE RELATIONSHIPS
// ====================================================================

/*
DOM TREE STRUCTURE CONCEPTS:
- Parent: Node that contains other nodes
- Children: Nodes contained within a parent
- Siblings: Nodes at the same level with same parent

Example HTML Structure:
body
├── div (parent)
│   ├── h1 (child of div, sibling of p, button, img)
│   ├── p (child of div, sibling of h1, button, img)
│   ├── button (child of div, sibling of h1, p, img)
│   └── img (child of div, sibling of h1, p, button)
└── script (sibling of div)

THREE TYPES OF NODES IN DOM:
1. Text nodes (whitespace, line breaks, text content)
2. Comment nodes (HTML comments)
3. Element nodes (HTML tags) - most commonly used
*/

// NAVIGATION PROPERTIES:
// firstChild - Returns first child node (including text/comment nodes)
console.dir(document.body.firstChild); // Output: #text (usually whitespace)

// children - Returns HTMLCollection of child ELEMENTS only (no text/comment nodes)
console.dir(document.querySelector("div").children);
/*
Output: HTMLCollection(3)
    0: div
    1: p  
    2: input
    length: 3
*/

// lastChild - Returns last child node
console.dir(document.body.lastChild); // Output: script element

// ====================================================================
// 8. PRACTICAL DOM MANIPULATION TECHNIQUES
// ====================================================================

// TECHNIQUE 1: Manual Individual Updates
/*
let divs = document.querySelectorAll(".class");
divs[0].innerText = "new Unique value 1";
divs[1].innerText = "new Unique value 2"; 
divs[2].innerText = "new Unique value 3";
*/

// TECHNIQUE 2: Loop-based Updates (Recommended for multiple elements)
/*
let divs = document.querySelectorAll(".class");
let idx = 1;
for(let div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}
*/

// ====================================================================
// 9. KEY DIFFERENCES SUMMARY
// ====================================================================

/*
HTMLCollection vs NodeList:
- HTMLCollection: Live collection, updates automatically when DOM changes
- NodeList: Static collection (from querySelectorAll), doesn't auto-update

getElementById vs querySelector:
- getElementById: Faster, returns single element by ID only
- querySelector: More flexible, uses CSS selector syntax, returns first match

innerHTML vs innerText vs textContent:
- innerHTML: Gets/sets HTML content including tags
- innerText: Gets/sets visible text only (respects styling)
- textContent: Gets/sets all text including hidden elements

console.log vs console.dir:
- console.log: Shows element as HTML
- console.dir: Shows element as object with properties/methods
*/

// ====================================================================
// 10. BEST PRACTICES
// ====================================================================

/*
1. Place scripts before closing </body> tag to ensure DOM is loaded
2. Use querySelector/querySelectorAll for modern, flexible selection
3. Cache DOM selections in variables to avoid repeated queries
4. Use meaningful variable names for selected elements
5. Prefer textContent over innerText for performance (unless styling matters)
6. Use innerHTML carefully to avoid XSS attacks with user input
7. Use loops for batch operations on multiple elements
*/