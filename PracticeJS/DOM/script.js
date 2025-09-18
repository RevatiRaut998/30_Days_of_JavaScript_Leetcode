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
