//Events in JavaScript
/*
The Cahnge in the state of an object is lnown as an Event
Events are fired to notify code of 'interesting changes' that may affect code execution

Mouse events (Click , double click)
Keyboard events 9keypress, keyup, keydown)
Form events (submit)
Print event & many more
*/

/*******************************************************************************************************/
// In-line event handling :
/**
 * <button onclick="console.log('Button was clicked!'); alert('Hello')">
      Click Me!
    </button>
 * <button ondblclick="console.log('Button was clicked twice!')">
      Double click Me!
    </button>
 * <div onmouseover="console.log('You are inside Div!')">This is a box</div>
 */

/*******************************************************************************************************/

// Event Handling In JS
/* node.event =()=>{
     //handle here
    }
*/

//Example :
let btn1 = document.querySelector("#btn1");

//  btn1.onclick = ()=>{
//     console.log("Btn1 was clicked!");
//     let a=24;
//     a++;
//     console.log(a);  //Output : 25
//  }

let div = document.querySelector("div");
div.onmouseover = () => {
  console.log("You are inside Div!");
};

//If we have handled the code Inline as well as in Js file: Priority is Js file , not inline

//If you have handled same event multiple times, previous one will be over ridden
//Example:
btn2.ondblclick = () => {
  console.log("Button was double clicked!");
};
btn2.ondblclick = () => {
  console.log("Handling it again");
};
//Here you will see : Handling it again in console, first one will get over ridden
//IN case we have multiple handlers, last handler will get executed

/*******************************************************************************************************/
//EVENT OBJECT :
/**
 * It is a special object that has details about the event
 * All event handlers have access to the Event Object's properties and methods
 */

//Syntax:
/* node.event=(e)=>{
    //handle here
}
 */

// e.target , e.type , e.clientX , e.clientY

//Example:
btn2.ondblclick = (e) => {
  console.log(e);
  console.log(e.type); // Output :dblclick
  console.log(e.clientX); // Output :80
  console.log(e.target); // Output : <button id="btn2">Double click Me!</button>
};
//Output : MouseEvent {isTrusted: true, screenX: 123, screenY: 138, clientX: 123, clientY: 17, …}

/* Important : 
  target : button#btn2 
  type : "dblclick"
  clientX : 100                Horizontal position on screen where the event occurred
  clientY : 16                 Vertical position on screen where the event occurred
  */

/******************************************************************************************************
#############################################################################################################
*********************************************************************************************************
  */

//EVENT LISTENERS :
/*
node.addEventListener(event,callback)

node.removeEventListener(event,callback)

Note: the callback reference should be same to remove 


Inline event handling - code becomes too bulky
Event handling in JS - can only handle one function using 1 event at a time

Event Listeners - Always listen for events, Multiple event listeners can be assigned for single event
*/

//Example:

let btn3 = document.querySelector("#btn1");
btn3.addEventListener("click", (evt) => {
  console.log("button 1 was clicked - handler1");
  console.log(evt.target);
});
btn3.addEventListener("click", () => {
  console.log("button 1 was clicked - handler2");
});
btn3.addEventListener("click", (evt) => {
  console.log("button 1 was clicked - handler3");
  // console.log(evt.target);
});

const handler4 = () => {
  //Callback reference for removing event listener has to be same , you shouldnt add the same function to the remove and expect it to work as it will be taking up independant space in memeory, assigning variable works as it will remove the variable itself in remove event listener
  console.log("button 1 was clicked - handler4");
};
btn3.addEventListener("click", handler4);

//Remove Event Listener:
btn3.removeEventListener("click", handler4);

/****************************************************************************************************************************************/
//Practice Questions :

// Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again

//Solution1 via background color change In-line styling :

let toggleBtn = document.querySelector("#toggleBtn");

let currMode = "Light";
toggleBtn.addEventListener("click", () => {
  console.log("Current Mode is", currMode);
  if (currMode === "Light") {
    currMode = "Dark";
    // document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "Light";
    // document.querySelector("body").style.backgroundColor = "white";
  }
  console.log("Updated Mode", currMode);
});

//Solution 2 : Via classes

//Add 2 classes to css. I have added darkMode and lightMode as classes to css

let toggleBtn2 = document.querySelector("#toggleBtn2");
let mode = "Light";
let body = document.querySelector("body");
toggleBtn2.addEventListener("click", () => {
  console.log("Current Mode is", mode);
  if (mode === "Light") {
    mode = "Dark";
    body.classList.remove("lightMode");
    body.classList.add("darkMode");
  } else {
    mode = "Light";
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
  }
  console.log("Updated Mode", mode);
});

//Hover Example: Show and Hide Puppy Image

let hoverDiv = document.querySelector("#hover");
let puppyImg = document.querySelector(".hidden");

hoverDiv.addEventListener("mouseover", () => {
    puppyImg.className = "visible";
  }
);
hoverDiv.addEventListener("mouseleave",()=>{
    puppyImg.className = "hidden";
})
