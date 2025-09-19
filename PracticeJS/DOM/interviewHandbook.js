/***************************************************************************************************
 📘 DOM INTERVIEW HANDBOOK
***************************************************************************************************/

/*
🚀 Interview Tips:
- Start with fundamentals (DOM tree, nodes).
- Know selection APIs (querySelector vs getElementById).
- Differences matter: innerText vs textContent vs innerHTML.
- Mention performance & security: innerHTML = XSS risk.
- Use classList over setAttribute for safe styling.
- Show practical examples in interviews.
*/

/***************************************************************************************************
 🌍 BASICS
***************************************************************************************************/

/*
Q1: What is the DOM, and how is it different from HTML?
A1: DOM is a programming interface representing the structure of an HTML document as a tree. 
    HTML is the markup itself, DOM is the in-memory representation browsers create from it.

Q2: Difference between window and document objects?
A2: window is the global object representing browser window; document is the object representing the page DOM.

Q3: Types of nodes?
A3: Element nodes (<div>), Text nodes (whitespace or text), Comment nodes (<!-- ... -->).
*/

/***************************************************************************************************
 🔎 SELECTION
***************************************************************************************************/

/*
Q5: Difference between getElementById/getElementsByClassName/getElementsByTagName vs querySelector/querySelectorAll?
A5: Old ones return HTMLCollection (live), querySelector returns first match, querySelectorAll returns NodeList (static).

Q6: Difference between HTMLCollection and NodeList?
A6: HTMLCollection is live (auto-updates), NodeList is static (doesn’t auto-update).
*/

/***************************************************************************************************
 🎨 PROPERTIES
***************************************************************************************************/

/*
Q7: Difference between innerText, textContent, innerHTML?
A7: innerText → visible text only, respects CSS. 
    textContent → all text including hidden. 
    innerHTML → returns/sets HTML markup inside.

Q8: tagName vs nodeName?
A8: tagName → element tag (e.g. "DIV"). nodeName → broader, includes node types like "#text".
*/

/***************************************************************************************************
 ⚡ MANIPULATION
***************************************************************************************************/

/*
Q9: How to dynamically update text in a div?
A9: document.querySelector("div").innerText = "New text";

Q10: Add a button at top of page?
A10: let btn = document.createElement("button"); 
     btn.innerText = "Click"; 
     document.body.prepend(btn);

Q11: Ways to remove an element?
A11: node.remove(), parent.removeChild(node).

Q12: append vs appendChild vs prepend vs before vs after?
A12: append/appendChild → inside element (end). 
     prepend → inside (start). 
     before/after → outside relative to node.
*/

/***************************************************************************************************
 🎨 STYLING
***************************************************************************************************/

/*
Q13: Difference between .style, .className, .classList?
A13: .style → inline styles. 
     .className → replace all classes. 
     .classList → add/remove/toggle safely.

Q14: Why toggle?
A14: To dynamically add/remove classes for UI state changes.

Q15: Why classList safer than setAttribute?
A15: setAttribute overrides all classes. classList modifies safely.
*/

/***************************************************************************************************
 🔹 ATTRIBUTES
***************************************************************************************************/

/*
Q16: Difference between getAttribute vs property access?
A16: getAttribute reads from HTML attribute. element.id accesses property (may be updated by DOM).

Q17: Risk of setAttribute("class", ...)? 
A17: It replaces all classes, may break existing styles.

Q18: Handling data-* attributes?
A18: getAttribute("data-name") / element.dataset.name
*/

/***************************************************************************************************
 🔄 ADVANCED
***************************************************************************************************/

/*
Q19: Why avoid innerHTML? 
A19: Performance cost (re-parsing DOM), XSS security risk.

Q20: .children vs .childNodes?
A20: children → element nodes only. childNodes → includes text, comment.

Q21: .firstChild vs .firstElementChild?
A21: firstChild → any node (often #text). firstElementChild → guaranteed element.

Q22: Why document.body.firstChild often #text?
A22: Because whitespace/newline before <div> is treated as text node.

Q23: Update styles of all .box elements?
A23: document.querySelectorAll(".box").forEach(el => el.style.color = "red");
*/

/***************************************************************************************************
 🧩 PRACTICAL SCENARIOS
***************************************************************************************************/

/*
Q24: Add paragraph after div.container?
A24: let p = document.createElement("p"); 
     p.innerText = "Hello"; 
     document.querySelector(".container").after(p);

Q25: Safely remove specific child?
A25: parent.removeChild(child);

Q26: Loop through <li> and add numbering?
A26: document.querySelectorAll("li").forEach((li,i)=>li.innerText=`${i+1}. ${li.innerText}`);

Q27: Check if element has a class?
A27: element.classList.contains("active");
*/

/***************************************************************************************************
 ✅ END OF DOM INTERVIEW HANDBOOK
***************************************************************************************************/
