// ================================================================================================
// JAVASCRIPT EVENTS - STUDY NOTES
// ================================================================================================

/*
Events in JavaScript:
- The change in the state of an object is known as an Event
- Events are fired to notify code of 'interesting changes' that may affect code execution

Common Types: Mouse events (click, double click), Keyboard events (keypress, keyup, keydown),
Form events (submit), Print events & many more

Additional Event Types:
- Window events: load, resize, scroll
- Focus events: focus, blur
- Drag events: dragstart, dragend
- Touch events: touchstart, touchend (mobile)
*/

// ================================================================================================
// 1. INLINE EVENT HANDLING
// ================================================================================================

/*
Inline event handling - events handled directly in HTML:

<button onclick="console.log('Button was clicked!'); alert('Hello')">Click Me!</button>
<button ondblclick="console.log('Button was clicked twice!')">Double click Me!</button>
<div onmouseover="console.log('You are inside Div!')">This is a box</div>

Drawbacks: Code becomes bulky, mixes HTML and JavaScript, harder to debug
Best Practice: Avoid for production code, use only for quick testing
*/

// ================================================================================================
// 2. EVENT HANDLING IN JAVASCRIPT
// ================================================================================================

/*
Syntax: node.event = () => { //handle here }
*/

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Btn1 was clicked!");
    let a = 24;
    a++;
    console.log(a);  // Output: 25
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside Div!");
};

// Priority: If both inline and JS file handling exist, JS file takes priority
// Additional: null assignment removes event handler
// btn1.onclick = null; // This removes the click handler

// Override behavior - only last handler executes:
btn2.ondblclick = () => {
    console.log("Button was double clicked!");
};
btn2.ondblclick = () => {
    console.log("Handling it again");  // Only this will execute
};

// ================================================================================================
// 3. EVENT OBJECT
// ================================================================================================

/*
Event Object - special object with event details
Important properties: 
- e.target: element that triggered the event
- e.type: type of event (click, keydown, etc.)
- e.clientX/Y: mouse position relative to viewport
- e.pageX/Y: mouse position relative to document
- e.preventDefault(): prevents default behavior
- e.stopPropagation(): stops event bubbling

Syntax: node.event = (e) => { //handle here }
*/

btn2.ondblclick = (e) => {
    console.log(e);             // Complete event object
    console.log(e.type);        // Output: dblclick
    console.log(e.clientX);     // Horizontal position: 80
    console.log(e.target);      // Element that triggered event
    
    // Prevent default behavior (useful for forms, links)
    // e.preventDefault();
    
    // Stop event from bubbling up to parent elements
    // e.stopPropagation();
};

// Common use case: Prevent form submission
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Stops form from submitting normally
//     // Handle form data with JavaScript instead
// });

// ================================================================================================
// 4. EVENT LISTENERS (RECOMMENDED)
// ================================================================================================

/*
Advantages:
- Multiple event listeners can be assigned for single event
- Always listen for events
- More organized code
- Can specify options (once, passive, capture)

Syntax: 
node.addEventListener(event, callback, options)
node.removeEventListener(event, callback)

Options object:
- once: true (runs only once then removes itself)
- passive: true (improves performance, can't preventDefault)
- capture: true (runs during capture phase)
*/

let btn3 = document.querySelector("#btn1");

// Multiple handlers for same event - all will execute
btn3.addEventListener("click", (evt) => {
    console.log("button 1 was clicked - handler1");
    console.log(evt.target);
});

btn3.addEventListener("click", () => {
    console.log("button 1 was clicked - handler2");
});

btn3.addEventListener("click", (evt) => {
    console.log("button 1 was clicked - handler3");
});

// Event listener with options
btn3.addEventListener("click", () => {
    console.log("This runs only once!");
}, { once: true });

// Removing Event Listeners - callback reference must be same
const handler4 = () => {
    console.log("button 1 was clicked - handler4");
};

btn3.addEventListener("click", handler4);
btn3.removeEventListener("click", handler4);  // Same reference required

// ================================================================================================
// 5. EVENT BUBBLING & DELEGATION
// ================================================================================================

/*
Event Bubbling: Events bubble up from child to parent elements
Event Capturing: Events trickle down from parent to child (less common)

Event Delegation: Attach listener to parent, handle events from children
- More efficient for dynamic content
- Fewer event listeners needed
*/

// Example of event delegation
// document.querySelector('.container').addEventListener('click', (e) => {
//     if (e.target.classList.contains('button')) {
//         console.log('Button clicked via delegation');
//     }
// });

// ================================================================================================
// 6. KEYBOARD EVENTS
// ================================================================================================

/*
Keyboard Events:
- keydown: when key is pressed down
- keyup: when key is released  
- keypress: deprecated, use keydown instead

Important properties: e.key, e.code, e.ctrlKey, e.shiftKey, e.altKey
*/

// document.addEventListener('keydown', (e) => {
//     console.log('Key pressed:', e.key);
//     console.log('Key code:', e.code);
//     
//     // Check for specific keys
//     if (e.key === 'Enter') {
//         console.log('Enter key pressed');
//     }
//     
//     // Check for modifier keys
//     if (e.ctrlKey && e.key === 's') {
//         e.preventDefault(); // Prevent browser save dialog
//         console.log('Ctrl+S pressed');
//     }
// });

// ================================================================================================
// 7. PRACTICE EXAMPLES
// ================================================================================================

// SOLUTION 1: Dark/Light Mode Toggle using inline styling
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

// SOLUTION 2: Dark/Light Mode Toggle using CSS classes (better approach)
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

// Alternative approach using toggle method (more concise):
// body.classList.toggle('darkMode');

// Show/Hide Image on Hover
let hoverDiv = document.querySelector("#hover");
let puppyImg = document.querySelector(".hidden");

hoverDiv.addEventListener("mouseover", () => {
    puppyImg.className = "visible";  // Show image
});

hoverDiv.addEventListener("mouseleave", () => {
    puppyImg.className = "hidden";   // Hide image
});

// ================================================================================================
// 8. PERFORMANCE TIPS & BEST PRACTICES
// ================================================================================================

/*
Performance Tips:
1. Use event delegation for dynamic content
2. Remove event listeners when elements are removed from DOM
3. Use passive listeners for scroll/touch events
4. Debounce expensive operations (search, resize)
5. Avoid anonymous functions if you need to remove listeners later

Common Mistakes:
- Forgetting to remove event listeners (memory leaks)
- Using different function references in add/remove
- Not preventing default behavior when needed
- Adding too many individual listeners instead of delegation
*/

// Debounce example for search input
// let debounceTimer;
// searchInput.addEventListener('input', (e) => {
//     clearTimeout(debounceTimer);
//     debounceTimer = setTimeout(() => {
//         performSearch(e.target.value);
//     }, 300);
// });

/*
SUMMARY:
1. Inline handling - Simple but avoid in production
2. JS properties - Clean but only one handler per event  
3. Event Listeners - Most flexible, multiple handlers possible (RECOMMENDED)

Key Concepts to Remember:
- Event bubbling and delegation
- preventDefault() and stopPropagation()
- Proper cleanup of event listeners
- Performance considerations for frequently fired events
*/