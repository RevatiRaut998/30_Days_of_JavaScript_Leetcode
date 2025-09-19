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

/*======================================================================================
 🔹 ATTRIBUTES
======================================================================================*/

// 1. getAttribute(attr) → Gets attribute value
let div = document.querySelector("div");
div.getAttribute("id");    // "product"
div.getAttribute("name");  // "JSName"

// 2. setAttribute(attr, value) → Sets/updates attribute
let para = document.querySelector("p");
para.setAttribute("class", "newClass"); // replaces class

/*
⚠️ Note:
- getAttribute works with HTML attributes.
- setAttribute overrides existing values (dangerous for "class").
- Use classList for safe class handling (preferred).
*/

/*======================================================================================
 🔹 STYLING
======================================================================================*/

// 1. Inline styling via .style
let box = document.querySelector("#box");
box.style.backgroundColor = "violet"; // Direct inline style

// 2. className → Replace all classes
box.className = "container highlighted"; // overwrites all

// 3. classList → Add/remove/toggle safely
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("collapsed");

/*
👉 Rule of thumb:
- Use .style for unique/computed inline values.
- Use .classList for scalable, state-driven styles.
- Use .className only when replacing ALL classes.
*/

/*======================================================================================
 🔹 INSERT ELEMENTS
======================================================================================*/

// Create element
let btn = document.createElement("button");
btn.innerText = "Click Me!";

// Insert methods
box.append(btn);     // Inside, at end
box.prepend(btn);    // Inside, at start
box.before(btn);     // Outside, before node
box.after(btn);      // Outside, after node

// Example: Adding heading at start of body
let h1 = document.createElement("h1");
h1.innerHTML = "<i>Hi, I am new!</i>";
document.body.prepend(h1);

/*
📌 Related:
- appendChild(el) – similar to append(), older API.
- removeChild(el) – removes child via parent.
*/

/*======================================================================================
 🔹 DELETE ELEMENTS
======================================================================================*/

// node.remove() → Deletes element
// btn.remove();

/*======================================================================================
 🔹 PRACTICE EXAMPLES
======================================================================================*/

// Task 1: Add button at top of body
let btn2 = document.createElement("button");
btn2.innerText = "Click Me!";
btn2.style.backgroundColor = "red";
btn2.style.color = "white";
document.body.prepend(btn2);

// Task 2: Add styled <p> with class
let newPara = document.createElement("p");
newPara.innerText = "Long sample text…";
newPara.style.backgroundColor = "lightgreen";
newPara.style.fontFamily = "Arial";
newPara.style.color = "white";

box.after(newPara);

// Best way: Add class (without overwriting)
newPara.classList.add("paraClass");
// Remove class if needed
// newPara.classList.remove("paraClass");

/*
⚠️ Inline styles > CSS styles (except with !important in CSS).
*/

/***************************************************************************************************
 ✅ End of Notes
***************************************************************************************************/
