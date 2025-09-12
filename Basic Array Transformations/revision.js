/*
Let’s make this easier for you: Templates

Here are the barebones templates you can always start from — fill in the middle logic later.
*/
// 1. Map 
var map = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

// 2. Filter
var filter = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

// 3. Reduce
var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};
/*
Trick to remember them

- Map → always returns a new array with transformed values.
- Filter → always returns a new array but with fewer items.
- Reduce → always returns a single value (number, string, object, whatever).

So the output type is your first clue:
“New array, same length” → Map
“New array, possibly shorter” → Filter
“Single value” → Reduce
*/