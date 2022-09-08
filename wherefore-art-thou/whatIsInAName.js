// Make a function that looks through an array of objects (first argument) and
// returns an array of all objects that have matching name and value pairs
// (second argument). Each name and value pair of the source object has to be
// present in the object from the collection if it is to be included in the
// returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" },
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and
// the second argument is { last: "Capulet" }, then you must return the third
// object from the array (the first argument), because it contains the name and
// its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    // Original solution:
    // New array to return
    const arr = [];
    // Only change code below this line
    // Get keys of source object
    const sourceKeys = Object.keys(source);
    // Filter the collection array of objects by the keys in the source object
    // by returning true for each collection object, every(), that also has each
    // name and value pair in source object, hasOwnProperty()
    const filtered = collection.filter(obj =>
        sourceKeys.every(key =>
            obj.hasOwnProperty(key) && obj[key] === source[key])
    );
    // Use spread syntax to copy, push(), the remaining elements (objects) into
    // the new array
    arr.push(...filtered);
    // Only change code above this line
    return arr;
    //
    //// With a for loop and filtering by objects without the same name or values:
    //// New array to return
    //const arr = [];
    //// Only change code below this line
    //// Get keys of source object
    //const sourceKeys = Object.keys(source);
    //// Filter the collection array of objects
    //const filtered = collection.filter(obj => {
    //    // For each source key
    //    for (let i = 0; i < sourceKeys.length; i++) {
    //        // Return false for objects that don't have the same name or that
    //        // don't have the same value for the same name
    //        if (!obj.hasOwnProperty(sourceKeys[i]) ||
    //            obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
    //                return false;
    //        }
    //    }
    //    // Return true for objects that have the same name and value pairs
    //    return true;
    //});
    //// Use spread syntax to copy, push(), the remaining elements (objects) into
    //// the new array
    //arr.push(...filtered);
    //// Only change code above this line
    //return arr;
}

whatIsInAName(
    [{ first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" }
);

