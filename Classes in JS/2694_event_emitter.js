// 30 days of JavaScript : 2694. Event Emitter
/*
Design an EventEmitter class. This interface is similar (but with some differences) to the one found 
in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to 
events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. 
This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. 
When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. 
An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. 
When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments 
that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an 
empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
 
*/


//Solution :
class EventEmitter {
    constructor() {
        // Store events as a Map where key is event name and value is array of callbacks
        this.events = new Map();
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // Initialize the event array if it doesn't exist
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        
        // Add the callback to the event's callback array
        this.events.get(eventName).push(callback);
        
        return {
            unsubscribe: () => {
                const callbacks = this.events.get(eventName);
                if (callbacks) {
                    // Find and remove the callback from the array
                    const index = callbacks.indexOf(callback);
                    if (index !== -1) {
                        callbacks.splice(index, 1);
                    }
                    
                    // Clean up empty event arrays
                    if (callbacks.length === 0) {
                        this.events.delete(eventName);
                    }
                }
                return undefined;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // If no callbacks for this event, return empty array
        if (!this.events.has(eventName)) {
            return [];
        }
        
        const callbacks = this.events.get(eventName);
        const results = [];
        
        // Call each callback with the provided arguments and collect results
        for (const callback of callbacks) {
            const result = callback(...args);
            results.push(result);
        }
        
        return results;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

// Example usage and testing:
const emitter = new EventEmitter();

// Test the provided example
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick')); // [99]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit('onClick')); // []

// Additional test cases
const sub1 = emitter.subscribe('test', (a, b) => a + b);
const sub2 = emitter.subscribe('test', (a, b) => a * b);
const sub3 = emitter.subscribe('greet', (name) => `Hello, ${name}!`);

console.log('Emit test event with args [2, 3]:');
console.log(emitter.emit('test', [2, 3])); // [5, 6] (2+3=5, 2*3=6)

console.log('Emit greet event with args ["Alice"]:');
console.log(emitter.emit('greet', ['Alice'])); // ["Hello, Alice!"]

console.log('Emit non-existent event:');
console.log(emitter.emit('nonexistent', [1, 2])); // []

// Test unsubscribe
console.log('After unsubscribing first test callback:');
sub1.unsubscribe();
console.log(emitter.emit('test', [2, 3])); // [6] (only 2*3=6 remains)