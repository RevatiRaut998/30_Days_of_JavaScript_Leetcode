// 30 days of JavaScript : 2705. Compact Object

/*
Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. 
This operation applies to the object and any nested objects. Arrays are considered objects where the indices 
are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
*/

//Solution : 

var compactObject = function(obj) {
    // Base case: If obj is null or not an object/array, return it as-is
    // This handles primitive values (numbers, strings, booleans) and null
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    
                                                                        // Handle arrays: Arrays are objects in JS, but we need special logic for them
    if (Array.isArray(obj)) {
        const result = [];                                              // Create a new array to store compacted elements
        
                                                                        // Iterate through each element in the array
        for (let i = 0; i < obj.length; i++) {
                                                                        // Recursively compact each element (handles nested objects/arrays)
            const value = compactObject(obj[i]);
            
                                                                        // Only include the element if it's truthy after compaction
                                                                        // Boolean(value) converts value to true/false based on truthiness
            if (Boolean(value)) {
                result.push(value);
            }
                                                                        // Note: Falsy elements are simply skipped, not added to result
        }
        return result;
    }
    
                                                                        // Handle objects: Regular objects with key-value pairs
    const result = {};                                                  // Create a new object to store compacted properties
    
                                                                        // Iterate through all enumerable properties of the object
    for (const key in obj) {
                                                                        // Check if the property belongs to the object itself (not inherited)
        if (obj.hasOwnProperty(key)) {
                                                                        // Recursively compact the value (handles nested objects/arrays)
            const value = compactObject(obj[key]);
            
                                                                        // Only include the key-value pair if the value is truthy after compaction
                                                                        // This removes properties with falsy values
            if (Boolean(value)) {
                result[key] = value;
            }
                                                                         // Note: Properties with falsy values are simply omitted from result
        }
    }
    
    return result;
};

// Test cases
console.log("Test 1:");
const obj1 = [null, 0, false, 1];
console.log("Input:", JSON.stringify(obj1));
console.log("Output:", JSON.stringify(compactObject(obj1)));
console.log("Expected: [1]");

console.log("\nTest 2:");
const obj2 = {"a": null, "b": [false, 1]};
console.log("Input:", JSON.stringify(obj2));
console.log("Output:", JSON.stringify(compactObject(obj2)));
console.log("Expected: {\"b\":[1]}");

console.log("\nTest 3:");
const obj3 = [null, 0, 5, [0], [false, 16]];
console.log("Input:", JSON.stringify(obj3));
console.log("Output:", JSON.stringify(compactObject(obj3)));
console.log("Expected: [5,[16]]");

console.log("\nTest 4 - Complex nested object:");
const obj4 = {
    "a": null,
    "b": {
        "c": false,
        "d": {
            "e": 0,
            "f": "hello",
            "g": [null, false, 0, 1, "world"]
        }
    },
    "h": []
};
console.log("Input:", JSON.stringify(obj4));
console.log("Output:", JSON.stringify(compactObject(obj4)));
console.log("Expected: {\"b\":{\"d\":{\"f\":\"hello\",\"g\":[1,\"world\"]}}}");

console.log("\nFalsy values in JavaScript:");
console.log("Boolean(false):", Boolean(false));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(''));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(NaN):", Boolean(NaN));