// ====================================================================
// ADVANCED DOM CONCEPTS - Complete Learning Guide
// Topics: Element Creation, Navigation, Attributes, Events, Forms
// ====================================================================

// Note: To run this code, ensure your HTML contains the necessary elements
// with the specified IDs and classes, for example:
// <div class="container">
//   <p>Existing paragraph</p>
//   <span id="target">Target element</span>
// </div>
// <img src="placeholder.jpg" alt="Placeholder image">
// <form id="myForm">...</form>
// <ul class="list"></ul>
// <template id="user-template"><div class="user"><span class="name"></span><span class="email"></span></div></template>
// <div class="lazy-load">...</div>

// ====================================================================
// 1. ELEMENT CREATION AND MODIFICATION
// ====================================================================

// CREATING NEW ELEMENTS
// createElement() - Creates a new HTML element
let newDiv = document.createElement("div");
let newParagraph = document.createElement("p");
let newButton = document.createElement("button");

// Setting content for new elements
newParagraph.innerText = "This is a new paragraph";
newButton.innerText = "Click Me";

// ADDING ELEMENTS TO DOM
// appendChild() - Adds element as last child
document.body.appendChild(newDiv);
newDiv.appendChild(newParagraph);
newDiv.appendChild(newButton);

// prepend() - Adds element as first child
let firstElement = document.createElement("h1");
firstElement.innerText = "I'm First!";
document.body.prepend(firstElement);

// INSERTING ELEMENTS AT SPECIFIC POSITIONS
// insertBefore(newElement, referenceElement)
let container = document.querySelector(".container");
if (container) {
    let existingElement = container.querySelector("p");
    let insertedElement = document.createElement("span");
    insertedElement.innerText = "I'm inserted before!";
    if (existingElement) {
        container.insertBefore(insertedElement, existingElement);
    }
}

// insertAdjacentElement() - More flexible insertion
// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
let targetElement = document.querySelector("#target");
if (targetElement) {
    let newElement = document.createElement("div");
    newElement.innerText = "Adjacent element";
    
    // The original code tried to use the same 'newElement' for all four positions,
    // which would move the element each time. We need to create a new element for each insertion.
    let newBeforeElement = newElement.cloneNode(true);
    let newAfterElement = newElement.cloneNode(true);
    let newFirstChildElement = newElement.cloneNode(true);
    let newLastChildElement = newElement.cloneNode(true);

    // Now, insert the unique elements
    targetElement.insertAdjacentElement('beforebegin', newBeforeElement);
    targetElement.insertAdjacentElement('afterbegin', newFirstChildElement);
    targetElement.insertAdjacentElement('beforeend', newLastChildElement);
    targetElement.insertAdjacentElement('afterend', newAfterElement);
    
    // insertAdjacentHTML() - Insert HTML string directly
    targetElement.insertAdjacentHTML('afterbegin', '<p>HTML inserted directly</p>');
}

// REMOVING ELEMENTS
// remove() - Modern way to remove element
let elementToRemove = document.querySelector(".remove-me");
if (elementToRemove) {
    elementToRemove.remove();
}

// removeChild() - Traditional way (requires parent)
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
if (parent && child) {
    parent.removeChild(child);
}

// REPLACING ELEMENTS
// replaceWith() - Modern replacement method
let oldElement = document.querySelector(".old");
if (oldElement) {
    let newReplacementElement = document.createElement("div");
    newReplacementElement.innerText = "I replaced the old element";
    oldElement.replaceWith(newReplacementElement);
}

// replaceChild() - Traditional replacement
let parentElement = document.querySelector(".parent");
let oldChild = document.querySelector(".old-child");
if (parentElement && oldChild) {
    let newChild = document.createElement("p");
    newChild.innerText = "New child element";
    parentElement.replaceChild(newChild, oldChild);
}

// CLONING ELEMENTS
// cloneNode() - Creates a copy of element
let originalElement = document.querySelector(".original");
if (originalElement) {
    let shallowClone = originalElement.cloneNode(); // Only element, no children
    let deepClone = originalElement.cloneNode(true); // Element with all children
    document.body.appendChild(deepClone);
}

// ====================================================================
// 2. ADVANCED DOM NAVIGATION
// ====================================================================

// PARENT NAVIGATION
let navElement = document.querySelector(".child");
if (navElement) {
    // parentNode vs parentElement
    console.log(navElement.parentNode); // Returns parent node (including document)
    console.log(navElement.parentElement); // Returns parent element (null for document)
}

// SIBLING NAVIGATION
// nextSibling vs nextElementSibling
if (navElement) {
    console.log(navElement.nextSibling); // Next node (including text/comments)
    console.log(navElement.nextElementSibling); // Next element node only
}

// previousSibling vs previousElementSibling
if (navElement) {
    console.log(navElement.previousSibling); // Previous node (including text/comments)
    console.log(navElement.previousElementSibling); // Previous element node only
}

// ADVANCED SELECTION METHODS
// closest() - Finds nearest ancestor matching selector
let button = document.querySelector("button");
if (button) {
    let nearestDiv = button.closest("div"); // Finds closest parent div
    let nearestForm = button.closest("form"); // Finds closest parent form
    console.log(nearestDiv);
    console.log(nearestForm);
}

// matches() - Checks if element matches selector
let paragraph = document.querySelector("p");
if (paragraph) {
    // The original code uses a placeholder class. For a real example, we'd check for a class that exists.
    // Let's assume the paragraph has a class "my-class"
    paragraph.classList.add("my-class");
    console.log(paragraph.matches(".my-class")); // true/false
    console.log(paragraph.matches("p")); // true
    console.log(paragraph.matches("div")); // false
}

// contains() - Checks if element contains another element
let containerParent = document.querySelector(".container");
let childElement = document.querySelector(".child");
if (containerParent && childElement) {
    console.log(containerParent.contains(childElement)); // true/false
}

// ====================================================================
// 3. ATTRIBUTES AND PROPERTIES MANIPULATION
// ====================================================================

// WORKING WITH ATTRIBUTES
let image = document.querySelector("img");
if (image) {
    // getAttribute() - Gets attribute value
    let srcValue = image.getAttribute("src");
    let altValue = image.getAttribute("alt");
    console.log(srcValue, altValue);

    // setAttribute() - Sets attribute value
    image.setAttribute("src", "new-image.jpg");
    image.setAttribute("alt", "New alt text");
    image.setAttribute("title", "Hover text");

    // removeAttribute() - Removes attribute
    image.removeAttribute("title");

    // hasAttribute() - Checks if attribute exists
    if (image.hasAttribute("data-id")) {
        console.log("Element has data-id attribute");
    }

    // getAttributeNames() - Gets all attribute names
    let allAttributes = image.getAttributeNames();
    console.log(allAttributes); // ["src", "alt", "class", etc.]
}

// WORKING WITH CSS CLASSES
let myElement = document.querySelector(".my-element");
if (myElement) {
    // classList methods - Modern way to handle classes
    myElement.classList.add("new-class"); // Add class
    myElement.classList.add("class1", "class2"); // Add multiple classes
    myElement.classList.remove("old-class"); // Remove class
    myElement.classList.toggle("active"); // Add if absent, remove if present
    myElement.classList.replace("old", "new"); // Replace class

    // Checking classes
    console.log(myElement.classList.contains("active")); // true/false
    console.log(myElement.classList.length); // Number of classes
    console.log(myElement.classList[0]); // First class name

    // className property - Traditional way (less preferred)
    myElement.className = "class1 class2 class3"; // Set all classes
    console.log(myElement.className); // Get all classes as string
}

// WORKING WITH DATA ATTRIBUTES
// HTML: <div data-user-id="123" data-user-name="john"></div>
let userElement = document.querySelector("[data-user-id]");
if (userElement) {
    // dataset property - Access data-* attributes
    console.log(userElement.dataset.userId); // "123" (camelCase conversion)
    console.log(userElement.dataset.userName); // "john"

    // Setting data attributes
    userElement.dataset.userAge = "25"; // Creates data-user-age="25"
    userElement.dataset.isActive = "true"; // Creates data-is-active="true"
}

// STYLE MANIPULATION
let styledElement = document.querySelector(".style-me");
if (styledElement) {
    // Direct style property manipulation
    styledElement.style.color = "blue";
    styledElement.style.backgroundColor = "yellow";
    styledElement.style.fontSize = "20px";
    styledElement.style.display = "none";

    // Getting computed styles
    let computedStyles = window.getComputedStyle(styledElement);
    console.log(computedStyles.color); // Current color value
    console.log(computedStyles.display); // Current display value
}

// ====================================================================
// 4. EVENT HANDLING - CORE DOM CONCEPT
// ====================================================================

// BASIC EVENT HANDLING
// addEventListener() - Modern way to handle events
let myButton = document.querySelector("#my-button");
if (myButton) {
    // Basic click event
    myButton.addEventListener("click", function() {
        console.log("Button clicked!");
    });

    // Using arrow functions
    myButton.addEventListener("click", () => {
        console.log("Button clicked with arrow function!");
    });

    // Named function approach
    function handleClick() {
        console.log("Button clicked with named function!");
    }
    myButton.addEventListener("click", handleClick);

    // REMOVING EVENT LISTENERS
    // removeEventListener() - Remove specific event listener
    myButton.removeEventListener("click", handleClick);
}

// EVENT OBJECT
// Every event handler receives an event object
if (myButton) {
    myButton.addEventListener("click", function(event) {
        console.log(event.type); // "click"
        console.log(event.target); // Element that triggered event
        console.log(event.currentTarget); // Element event listener is attached to
        console.log(event.timeStamp); // When event occurred
        
        // Prevent default behavior
        // event.preventDefault();
        
        // Stop event from bubbling up
        // event.stopPropagation();
    });
}

// COMMON EVENT TYPES
// Mouse Events
let interactiveElement = document.querySelector(".interactive");
if (interactiveElement) {
    interactiveElement.addEventListener("click", (e) => console.log("Clicked"));
    interactiveElement.addEventListener("dblclick", (e) => console.log("Double clicked"));
    interactiveElement.addEventListener("mousedown", (e) => console.log("Mouse down"));
    interactiveElement.addEventListener("mouseup", (e) => console.log("Mouse up"));
    interactiveElement.addEventListener("mouseover", (e) => console.log("Mouse over"));
    interactiveElement.addEventListener("mouseout", (e) => console.log("Mouse out"));
    interactiveElement.addEventListener("mouseenter", (e) => console.log("Mouse enter"));
    interactiveElement.addEventListener("mouseleave", (e) => console.log("Mouse leave"));
    interactiveElement.addEventListener("mousemove", (e) => {
        console.log(`Mouse at: ${e.clientX}, ${e.clientY}`);
    });
}

// Keyboard Events
document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
    console.log(`Key code: ${e.code}`);
    
    // Check for specific keys
    if (e.key === "Enter") {
        console.log("Enter key pressed!");
    }
    
    // Check for modifier keys
    if (e.ctrlKey) console.log("Ctrl is held down");
    if (e.shiftKey) console.log("Shift is held down");
    if (e.altKey) console.log("Alt is held down");
});

document.addEventListener("keyup", (e) => console.log("Key released"));
// keypress is deprecated, so we can comment it out or note its status.
// document.addEventListener("keypress", (e) => console.log("Key pressed (deprecated)"));

// Form Events
let form = document.querySelector("form");
let input = document.querySelector("input");
if (form && input) {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission
        console.log("Form submitted");
    });

    input.addEventListener("focus", () => console.log("Input focused"));
    input.addEventListener("blur", () => console.log("Input lost focus"));
    input.addEventListener("change", (e) => {
        console.log(`Input changed to: ${e.target.value}`);
    });
    input.addEventListener("input", (e) => {
        console.log(`Input value: ${e.target.value}`); // Fires on every character
    });
}

// Window/Document Events
window.addEventListener("load", () => {
    console.log("Page fully loaded");
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
});

window.addEventListener("resize", () => {
    console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
});

window.addEventListener("scroll", () => {
    console.log(`Scroll position: ${window.scrollY}`);
});

// EVENT BUBBLING AND CAPTURING
let parentElement = document.querySelector(".parent");
let childElement = document.querySelector(".child");
if (parentElement && childElement) {
    // Bubbling (default) - event goes from target to root
    parentElement.addEventListener("click", () => console.log("Parent clicked"));
    childElement.addEventListener("click", () => console.log("Child clicked"));
    // Clicking child logs: "Child clicked", then "Parent clicked"

    // Capturing - event goes from root to target
    parentElement.addEventListener("click", () => console.log("Parent clicked (capture)"), true);
    childElement.addEventListener("click", () => console.log("Child clicked (capture)"), true);
}

// EVENT DELEGATION - Handling events on dynamically created elements
let eventContainer = document.querySelector(".container");
if (eventContainer) {
    // Instead of adding listeners to each child, listen on parent
    eventContainer.addEventListener("click", (e) => {
        // Check if clicked element matches what we want
        if (e.target.matches(".dynamic-button")) {
            console.log("Dynamic button clicked!");
            console.log("Button text:", e.target.innerText);
        }
    });

    // Now any button with class 'dynamic-button' added later will work
    let newDynamicButton = document.createElement("button");
    newDynamicButton.className = "dynamic-button";
    newDynamicButton.innerText = "Dynamic Button";
    eventContainer.appendChild(newDynamicButton);
}


// ====================================================================
// 5. FORM HANDLING AND VALIDATION
// ====================================================================

// ACCESSING FORM ELEMENTS
let myForm = document.querySelector("#myForm");
if (myForm) {
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");
    let submitButton = document.querySelector("#submit");

    // GETTING AND SETTING FORM VALUES
    if (nameInput) nameInput.value = "John Doe";
    if (emailInput) emailInput.value = "john@example.com";

    // FORM VALIDATION
    function validateForm() {
        let isValid = true;
        let errors = [];
        
        // Check if elements exist before using them
        if (!nameInput || !emailInput || !passwordInput) {
            console.warn("Form elements not found for validation.");
            return false;
        }

        if (nameInput.value.trim() === "") {
            errors.push("Name is required");
            nameInput.classList.add("error");
            isValid = false;
        } else {
            nameInput.classList.remove("error");
        }
        
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            errors.push("Please enter a valid email");
            emailInput.classList.add("error");
            isValid = false;
        } else {
            emailInput.classList.remove("error");
        }
        
        if (passwordInput.value.length < 6) {
            errors.push("Password must be at least 6 characters");
            passwordInput.classList.add("error");
            isValid = false;
        } else {
            passwordInput.classList.remove("error");
        }
        
        let errorContainer = document.querySelector("#errors");
        if (errorContainer) {
            if (!isValid) {
                errorContainer.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
                errorContainer.style.display = "block";
            } else {
                errorContainer.style.display = "none";
            }
        }
        
        return isValid;
    }

    // FORM SUBMISSION HANDLING
    myForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission
        
        if (validateForm()) {
            let formData = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };
            
            console.log("Form data:", formData);
            alert("Form submitted successfully!");
            myForm.reset(); // Clear form
        }
    });

    // REAL-TIME VALIDATION
    if (nameInput) nameInput.addEventListener("blur", validateForm);
    if (emailInput) emailInput.addEventListener("blur", validateForm);
    if (passwordInput) passwordInput.addEventListener("blur", validateForm);
}

// WORKING WITH SELECT ELEMENTS
let selectElement = document.querySelector("select");
if (selectElement) {
    console.log(selectElement.value);
    console.log(selectElement.selectedIndex);
    console.log(selectElement.options);
    selectElement.value = "option2";
    selectElement.addEventListener("change", (e) => {
        console.log("Selected:", e.target.value);
    });
}

// WORKING WITH CHECKBOXES AND RADIO BUTTONS
let checkbox = document.querySelector("#agree");
let radioButtons = document.querySelectorAll("input[name='gender']");

if (checkbox) {
    console.log(checkbox.checked);
    checkbox.checked = true;
    checkbox.addEventListener("change", (e) => {
        console.log("Checkbox is:", e.target.checked ? "checked" : "unchecked");
    });
}

if (radioButtons.length > 0) {
    radioButtons.forEach(radio => {
        radio.addEventListener("change", (e) => {
            if (e.target.checked) {
                console.log("Selected gender:", e.target.value);
            }
        });
    });

    function getSelectedRadio(name) {
        let selected = document.querySelector(`input[name="${name}"]:checked`);
        return selected ? selected.value : null;
    }

    console.log("Selected gender:", getSelectedRadio("gender"));
}

// ====================================================================
// 6. PERFORMANCE OPTIMIZATION TECHNIQUES
// ====================================================================

// DOCUMENT FRAGMENTS - For better performance when adding multiple elements
let fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    fragment.appendChild(listItem);
}

let ul = document.querySelector("ul");
if (ul) {
    ul.appendChild(fragment);
}

// BATCH DOM OPERATIONS
let batchContainer = document.querySelector(".container");
if (batchContainer) {
    // Better: Batch style changes
    batchContainer.style.cssText = "display: none; width: 200px; height: 100px;";

    // Or use classes for better performance
    // To avoid overwriting existing classes, use a more robust method:
    batchContainer.classList.add("hidden", "large-box");
}

// ====================================================================
// 7. MODERN DOM MANIPULATION PATTERNS
// ====================================================================

// TEMPLATE ELEMENTS
let template = document.querySelector("#user-template");
let usersContainer = document.querySelector(".users-container");
if (template && usersContainer) {
    let templateClone = template.content.cloneNode(true);

    // Modify cloned template
    let nameSpan = templateClone.querySelector(".name");
    let emailSpan = templateClone.querySelector(".email");
    
    if (nameSpan) nameSpan.textContent = "John Doe";
    if (emailSpan) emailSpan.textContent = "john@example.com";

    // Add to DOM
    usersContainer.appendChild(templateClone);
}

// INTERSECTION OBSERVER - For lazy loading, infinite scroll
let lazyLoadElements = document.querySelectorAll(".lazy-load");
if (lazyLoadElements.length > 0) {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Element is visible!");
                // Load content, trigger animations, etc.
                // We should also unobserve the element once it's visible to avoid repeated calls
                observer.unobserve(entry.target);
            }
        });
    });

    lazyLoadElements.forEach(el => observer.observe(el));
}

// ====================================================================
// 8. BEST PRACTICES AND COMMON PATTERNS
// ====================================================================

/*
BEST PRACTICES:

1. Cache DOM selections:
    - let button = document.querySelector('.btn'); // Cache this
    
2. Use event delegation for dynamic content:
    - Add listeners to parent elements instead of individual children
    
3. Batch DOM operations:
    - Group multiple changes together to minimize reflows
    
4. Use DocumentFragment for multiple element creation:
    - More efficient than individual appendChild calls
    
5. Prefer modern methods:
    - Use addEventListener over onclick
    - Use classList over className manipulation
    - Use querySelector over getElementById (unless performance critical)
    
6. Clean up event listeners:
    - Remove listeners when elements are removed from DOM
    
7. Validate user input:
    - Always validate both client-side and server-side
    
8. Handle errors gracefully:
    - Check if elements exist before manipulating them
    
9. Use semantic HTML:
    - Proper HTML structure makes DOM manipulation easier
    
10. Consider accessibility:
    - Ensure dynamic changes are announced to screen readers
*/

// ERROR HANDLING EXAMPLE
let safeElement = document.querySelector(".might-not-exist");
function handleClick() {
    console.log("Element clicked!");
}

if (safeElement) {
    safeElement.addEventListener("click", handleClick);
} else {
    console.warn("Element with class 'might-not-exist' not found.");
}

// UTILITY FUNCTIONS FOR COMMON TASKS
function createElementWithClass(tagName, className, textContent) {
    let element = document.createElement(tagName);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

function removeAllChildren(parent) {
    if (!parent) return;
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function isElementInViewport(element) {
    if (!element) return false;
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ====================================================================
// Complete DOM knowledge covering:
// - Element creation and modification
// - Advanced navigation
// - Attributes and properties
// - Event handling (the most important part!)
// - Form handling and validation
// - Performance optimization
// - Modern patterns and best practices
// ====================================================================