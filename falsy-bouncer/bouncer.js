// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.


function bouncer(arr) {
    //// With a for loop:
    //// New array to return
    //const newArray = [];
    //// Iterate over each value in the array
    //for (let element of arr) {
    //// Use the if statement to check if the current element is truthy or falsy
    //// If the element is truthy, add it to the new array
    //    if ( element ) newArray.push(element);
    //}
    //return newArray;
    // With filter() and Boolean():
    // Return only elements, filter(), that convert to true, Boolean()
    // return arr.filter(element => Boolean(element));
    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

