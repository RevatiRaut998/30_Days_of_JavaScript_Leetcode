# JavaScript Events

A comprehensive study of JavaScript Events with practical examples and interactive demonstrations.

## 📁 Folder Structure

```
Events/
├── index.html              # HTML structure with buttons and elements for testing
├── style.css              # CSS styling including dark/light mode classes
├── script.js              # Main JavaScript file with all event implementations
├── structuredNotes.js     # Organized study notes with explanations and examples
└── README.md             # This documentation
```

## 📚 Topics Covered

### 1. **Event Handling Methods**
- **Inline Event Handling** - Direct HTML event attributes
- **JavaScript Properties** - Assigning functions to element properties  
- **Event Listeners** - Modern, flexible approach (recommended)

### 2. **Event Object**
- Understanding the event parameter
- Key properties: `target`, `type`, `clientX`, `clientY`
- Practical usage in event handlers

### 3. **Event Listeners Deep Dive**
- Adding multiple listeners to same event
- Removing event listeners properly
- Callback reference importance

### 4. **Practical Projects**
- **Dark/Light Mode Toggle** (2 different approaches)
- **Image Show/Hide on Hover**
- Real-world implementation examples

## 🚀 How to Use

1. **Study the Theory**: Start with `structurednotes.js` for comprehensive explanations
2. **See It in Action**: Open `index.html` in your browser to test all examples
3. **Experiment**: Modify `script.js` to try your own event handling scenarios

## 💡 Key Concepts Learned

- **Event Propagation** basics
- **Multiple Event Handlers** for same element
- **Event Object Properties** and their usage
- **Best Practices** for event handling
- **Performance Considerations**

## 🎯 Interactive Features

- **Toggle Buttons** - Switch between dark and light modes
- **Hover Effects** - Dynamic image visibility
- **Multiple Handlers** - See how different approaches work
- **Console Output** - Track event firing and object properties

## 📖 Code Examples

### Event Listener with Multiple Handlers
```javascript
btn3.addEventListener("click", (evt) => {
    console.log("button 1 was clicked - handler1");
});

btn3.addEventListener("click", () => {
    console.log("button 1 was clicked - handler2");
});
```

### Dark Mode Toggle Implementation
```javascript
toggleBtn2.addEventListener("click", () => {
    if (mode === "Light") {
        body.classList.remove("lightMode");
        body.classList.add("darkMode");
    } else {
        body.classList.remove("darkMode");
        body.classList.add("lightMode");
    }
});
```

## 🔧 Requirements

- Modern web browser with JavaScript enabled
- No external dependencies required
- All examples use vanilla JavaScript

## 📝 Study Progress

**Completed Topics** ✅
- Event handling fundamentals
- Event object manipulation  
- Multiple event listeners
- Practical implementations

**Next Steps** 📋
- Event bubbling and capturing
- Keyboard events
- Form events
- Event delegation
- Performance optimization

## 🎨 Visual Features

- **Responsive Design** - Works on different screen sizes
- **Dark/Light Theme** - Toggle between themes dynamically
- **Interactive Elements** - Hover effects and click responses
- **Clean UI** - Focused on learning without distractions

---

*This folder represents a foundational understanding of JavaScript Events. Perfect for revision and building upon for more advanced event handling concepts.*