// alert("Welcome to Document Object Model");
console.log("Hello");
// alert("Hello");
window.console.log("Hello R"); //Global Object created by browser
console.log(window.document); //Html code will be printed in console)
console.dir(window.document); // Document object will be printed in console for us to access its properties and methods
// console.dir is different than console.log as it allows us to read properties and methods of our object instead of printing just the element in console

console.dir(document.body); //We get body of html in console
console.log(document.body); // Html code of body

//childNodes - inside our node how many child nodes are present ,
// Example : Inside body node , childNodes present would be -
/*
   childNodes: NodeList(9)
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

//Dynamically making chnages to our web page is possible due to this document access
// Example: changing background color of web page during run time
//document.body.style.background = "blue" ;  //Background will change to blue

//Change heading text
//document.body.childNodes[1].innerText = "Changed Heading"    //Heading will change

//If we include our script tag in head, our DOM elements are not accessible so we include script tag just before ending the body tag

/****************************************************************************************************************************/

//DOM Manipulation

// Selecting with id : document.getElementById("myId")
let heading = document.getElementById("heading"); //h1
console.dir(heading); //Output: h1#heading
//If you search for a non exsiitng Id , it will print null in console

//Selecting with class : document.getElementsByClassName("myClass")
let classData = document.getElementsByClassName("c1");
console.dir(classData);
/*Output: HTMLCollection(2) 
                0: p.c1
                1: button.c1
                length: 2    */

console.log(classData); // Output: HTMLCollection(2) [p.c1, button.c1]
//this returns html collections
//If you search for non exisitng class , you will get empty collections in console

//Selecting with tag : document.getElementsByTagName("p")
//If you want to access same time of tags
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
/* Output:
  HTMLCollection(2)
    0: p.c1
    1: p.c2
    length: 2
*/

/*****************************************************************************************************************/

// Query Selector  : Returns NodeList

//1. document.querySelector("myId/myClass/tag")
//returns first element

//To get element using tags
let firstElement = document.querySelector("p");
console.dir(firstElement); //Output: p.c1
//Here only the first p tag element was returned

//To get element using class
let firstClass = document.querySelector(".c1");
console.dir(firstClass); //Output: p.c1
//Here first element with class = c1 is output

//To get element using Id
let firstId = document.querySelector("#heading");
console.dir(firstId); //Output: h1#heading
console.log(firstId); //Output: <h1 id="heading">Welcome to JS Practice</h1>

//2. document.querySelectorAll("myId/myClass/tag")
//returns a NodeList

//To get ALL p tags
let allElements = document.querySelectorAll("p");
console.dir(allElements); //Nodelist is returned
/*
Output:
   NodeList(2)
    0: p.c1
    1: p.c2
    length: 2
*/

//To get class
let allClass = document.querySelectorAll(".c1");
console.dir(allClass); //Nodelist with all elements of class = c1 is output
/*
Output:
   NodeList(2)
    0: p.c1
    1: button.c1
    length: 2
*/

//To get element using Id
let allId = document.querySelectorAll("#heading");
console.dir(allId);
/*
Output:
   NodeList(2)
    0: h1#heading
    1: h2#heading
    length: 2
*/

/**********************************************************************************************************************************/

// PROPERTIES

// 1. tagName : returns tag for elements nodes
console.dir(firstElement.tagName); //Output : P

/**************************************************************************************************************************************/

/* 2. innerText : returns the text content of the element and all its children*/
console.dir(document.querySelector("div").innerText);
/*Output : 
    Catalogue
    Tops
    Bottoms
    Skirts
    Shoes
Here , we had div > h2 , ul > li,li,li
Inner text of all of them was printed

I can change value using innerText in runtime,
Example: */
// document.querySelector("div").innerText = "Updated Div";

/**************************************************************************************************************************************/
/*

* In tree like structure - the top node is parents ,  below that is children
Example: In HTML body > div , script  
 in DIV tag > h1 , p , button , img
Here, 
Body is PARENT , div and script are CHILD
- In DIV , Div is PARENT , h1 , p , button , img ARE CHILDREN
DIV and SCRIPT are Siblings , 
- h1 , p , button , img  are Siblings

When we create DOM Tree - we have 3 types of nodes
1.Text node
2.Comment node
3.Element node
In DOM we are working with element nodes 

All Nodes have property called FIRSTCHILD - it returns the node's first child in the tree or null if node has no children */
console.dir(document.body.firstChild); //Output: #text    // By default text node is coming

//If the node is a Document, the porperty returns the first node in th elist of its direct children
console.dir(document.querySelector("div").children);
/*
Output:
   HTMLCollection(3)
    0: div
    1: p
    2: input
    length: 3
*/

//Similarly we have LASTCHILD property - returns last child of the node
console.dir(document.body.lastChild); //Output: script

/**************************************************************************************************************************************/

//3. innerHTML : returns the plain text or HTML contents in the element
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

Here , the html content gets printed in console

I can change value using innerHTML in runtime,
Example: */
// document.querySelector("div").innerHTML = "<p>New HTML Tag</p>"

/**************************************************************************************************************************************/

//4. textContent : returns textual content even for hidden elements

let hiddenHeading = document.querySelector("h3");
console.log(hiddenHeading.textContent); //Output : Hidden Catalogue

/**************************************************************************************************************************************/

/*
let divs = document.querySelectorAll(".class");

1.Manual adding
divs[0].innerText = "new Unique value 1";
divs[1].innerText = "new Unique value 2";
divs[2].innerText = "new Unique value 3";

2.Loop concept for n number of div manipulation
    let idx =1;
    for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}
*/

/*#####################################################################################################################################*/

//ATTRIBUTES

/*#####################################################################################################################################*/

//1. getAtrribute(attr)
//to get the attribute value
//I can call this to get attributes of any node

//Example:
let div = document.querySelector("div");
console.log(div);
/*//Output: 
    <div id="product">
        <h2>Catalogue</h2>
        <ul>
            <li>Tops</li>
            <li>Bottoms</li>
            <li>Skirts</li>
            <li>Shoes</li>
        </ul>
    </div>

    or div#product 

Note- Chrome DevTools shows DOM elements differently based on context: sometimes as a full HTML-like preview, 
      other times as a shorthand like div#id.
Both point to the same element object — the difference is only in how the console chooses to display it.
*/

let id = div.getAttribute("id");
console.log(id); //Output : product

let name1 = div.getAttribute("name");
console.log(name1); //Output : JSName

let paraData = document.querySelector("p");
console.log(paraData.getAttribute("class")); // Output : c1

/***************************************************************************************/

//2. setAttribute(attr,value)
//to set the attribute value

console.log(paraData.setAttribute("class", "newClass"));
//To test : In console : document.querySelector('p')
//You'll see the output as -
/* <p class="newClass">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
*/
//Or you can go to Elements tab directly to see changed html

//In console, you can directly add:
paraData.setAttribute("class", "123");

//To test : In console itself : document.querySelector('p')
//You'll see the output as -
/*
    <p class="12345">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
*/

//Or you can go to Elements tab directly to see changed html

/***************************************************************************************************************************************/

//STYLE

//node.style

let div2 = document.querySelector("#box");
console.log(div2.style);
//Output: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

//You can also change the styling
div2.style.backgroundColor = "violet";

//Background color of box is violet now

/**
 🔹 JS Styling Approaches

1. .style (inline styles)
Directly changes the element’s CSS via JS.
Good for one-off, dynamic values (e.g., div.style.height = window.innerHeight + "px";).
Harder to maintain for larger apps.

2. .classList / changing className

Switches CSS classes already defined in stylesheets.
Best for state-based UI changes (e.g., div.classList.add("completed")).
Cleaner separation: CSS handles styling, JS handles logic.
Easier to scale, maintain, and keep consistent.

👉 Rule of thumb:
Use .style for unique, computed values.
Use .classList for reusable, state-driven styles.
 

/**
 🔹 JS Styling Approaches

1. element.style (inline styles)
   - Directly changes CSS from JS.
   - Good for one-off, dynamic values (e.g., div.style.height = window.innerHeight + "px";).
   - Harder to maintain for larger apps.

2. element.className
   - Sets/replaces the entire class string.
   - Useful when you want to reset all classes at once.
   - Risk: overwrites existing classes.

3. element.classList
   - Provides methods: add(), remove(), toggle(), contains().
   - Safely manages individual classes without affecting others.
   - Best for state-based UI changes (completed, error, active).
   - Scalable and maintainable (logic in JS, styles in CSS).

Here, .classList / changing className

- Switches CSS classes already defined in stylesheets.
- Best for state-based UI changes (e.g., div.classList.add("completed")).
- Cleaner separation: CSS handles styling, JS handles logic.
- Easier to scale, maintain, and keep consistent.


👉 Rule of thumb:
- Use .style for unique inline values.
- Use .classList for reusable, state-driven styles.
- Use .className when you want to replace all classes at once.
 */

/*################################################################################################################################*/

//Insert Elements

let el = document.createElement("div");

//Example:
let newBn = document.createElement("button");
newBn.innerText = "Click Me!";
console.log(newBn); // It will not be visible in UI only console
//We have to add this element to our Document (Tree-like model) now

//Use below methods to add new elements to DOM

/***************************************************************************************************************************************/
//node.append(el)
// adds at the end of node ( inside)

div2.append(newBn);

/***************************************************************************************************************************************/
//node.prepend(el)
// adds at the start of node ( inside)

div2.prepend(newBn);

/***************************************************************************************************************************************/
//node.before(el)
// adds before the node ( outside)

div2.before(newBn);

/***************************************************************************************************************************************/
//node.after(el)
// adds after the node ( outside)

div2.after(newBn);

//Example 2:

let newHeading1 = document.createElement("h1");
newHeading1.innerHTML = "<i>HI, I am new!</i>";

document.querySelector("body").prepend(newHeading1);

//NOTE : Read about appendChild() and removeChild()
/***************************************************************************************************************************************/

//DELETE Elements
//node.remove()
//deletes the node
//Example:
// newBn.remove();

/***************************************************************************************************************************************/

//Practice Examples:
//Task: Add a new button in js and place it at start of body tag
let Btn2 = document.createElement("button");
Btn2.innerText = "Click Me!";
Btn2.style.backgroundColor = "red";
Btn2.style.color = "white";
document.querySelector("body").prepend(Btn2);

//Task : Add a new p tag in js , some styling , then assign a css class to it in js itself
let newPara = document.createElement("p");
newPara.innerText =
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";
newPara.style.backgroundColor = "lightgreen";
newPara.style.fontFamily = "arial";
newPara.style.fontSize = "medium";
newPara.style.color = "white";

div2.after(newPara);

//Adding new class to para element, here our class is present in css only
//newPara.className = "paraClass";
//Best way :
newPara.classList.add("paraClass");

//Incase newPara or an existing html p tag has a class already , setAtrribute would override the existing class  ,
// that is why using Classlist is the best way to append new class to the para
//use newPara.classList.remove("paraClass");     to remove the class

//NOTE : Here, styling in js (inline styling) for para will take precedent over the css styling
// only if you add !important in css will it override inline styling
