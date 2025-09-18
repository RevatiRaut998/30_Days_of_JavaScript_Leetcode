/***************************************************************************************************
 📘 DOM (Document Object Model) – Quick Reference Notes
***************************************************************************************************/

/*
DOM = Programming interface for HTML.
- Browser creates a "document" object for every web page.
- DOM represents the page as a tree of nodes (elements, text, comments).
- We can read and manipulate elements at runtime.
*/

/***************************************************************************************************
 🌍 Window & Document
***************************************************************************************************/

// window → global object created by browser
console.log(window.document);   // Full HTML
console.dir(window.document);   // Object with properties & methods

// console.log → prints element
// console.dir → prints object (explorable)

// Access body
console.log(document.body);     // HTML code
console.dir(document.body);     // Body object


/***************************************************************************************************
 🌱 Nodes & DOM Tree
***************************************************************************************************/

/*
Types of nodes:
1. Element nodes (div, h1, p, etc.)
2. Text nodes   (whitespace, text content)
3. Comment nodes

Relations:
- Parent → Child → Sibling
- Example:
   <body>
      <div> ... </div>
      <script> ... </script>
   </body>
   → body = parent, div & script = children/siblings
*/

console.dir(document.body.childNodes); // NodeList with text, elements, comments
console.dir(document.body.firstChild); // usually #text
console.dir(document.body.lastChild);  // often <script>
console.dir(document.querySelector("div").children); // HTMLCollection of child elements


/***************************************************************************************************
 🎨 Dynamic DOM Manipulation
***************************************************************************************************/

// Change background at runtime
// document.body.style.background = "blue";

// Change text content
// document.querySelector("h1").innerText = "Updated Heading";

// Best practice: Place <script> before </body> (so DOM loads first)


/***************************************************************************************************
 🔎 DOM Selection Methods
***************************************************************************************************/

/*
Old-school selections (HTMLCollection – live):
----------------------------------------------
- getElementById("id")        → single element or null
- getElementsByClassName("c") → HTMLCollection
- getElementsByTagName("p")   → HTMLCollection

Modern selections (NodeList – static):
----------------------------------------------
- querySelector("css")        → first match
- querySelectorAll("css")     → NodeList of all matches
*/

// Examples:
let idElement     = document.getElementById("heading");
let classElements = document.getElementsByClassName("c1");
let tagElements   = document.getElementsByTagName("p");

let firstP        = document.querySelector("p");
let allP          = document.querySelectorAll("p");


/***************************************************************************************************
 🏷️ DOM Properties
***************************************************************************************************/

// 1. tagName → element’s tag
console.log(firstP.tagName); // "P"

// 2. innerText → visible text (ignores hidden)
console.log(document.querySelector("div").innerText);

// 3. innerHTML → HTML inside element
console.log(document.querySelector("div").innerHTML);

// 4. textContent → all text, including hidden
let hidden = document.querySelector("h3");
console.log(hidden.textContent);


/***************************************************************************************************
 🔄 Multiple Element Manipulation
***************************************************************************************************/

let divs = document.querySelectorAll(".box");

// Manual way
// divs[0].innerText = "Value 1";
// divs[1].innerText = "Value 2";

// Loop way (scalable)
let idx = 1;
for (let div of divs) {
   div.innerText = `New Value ${idx}`;
   idx++;
}


/***************************************************************************************************
 ⚡ DOM Interview Cheat Sheet
***************************************************************************************************/

/*
✔ getElementById → single element
✔ getElementsByClassName / getElementsByTagName → HTMLCollection (live)
✔ querySelector → first match
✔ querySelectorAll → NodeList (static)
✔ innerText → visible text only
✔ textContent → all text (even hidden)
✔ innerHTML → HTML markup inside
✔ .children → HTMLCollection of element children
✔ .firstChild / .lastChild → first/last node (may be text/comment)
*/

/***************************************************************************************************
 ✅ End of Notes
***************************************************************************************************/
