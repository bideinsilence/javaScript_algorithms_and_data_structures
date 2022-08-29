// You will be provided with an initial array (the first argument in the
// destroyer function), followed by one or more arguments. Remove all elements
// from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.


function destroyer(arr) {
    //// Per MDN: arguments is an Array-like object accessible inside functions
    //// that contains the values of the arguments passed to that function
    //// Original solution, with two for loops:
    //// Index through each elment of the array
    //for (let i = 0; i < arr.length; i++) {
    //    // For each element of the array, index through the remaining arguments
    //    // of the function
    //    for (let j = 1; j < arguments.length; j++) {
    //        // If the value of an elment in the array is the same value as an
    //        // argument to the function, remove that element from the array
    //        if (arr[i] === arguments[j]) {
    //            // As splice() removes an element from the array (mutates the
    //            // array), the index, i, still increments and the next element
    //            // after the matched value is skipped. A simple solution is to
    //            // decrement the index variable so that it does not skip the
    //            // next element in the array.
    //            arr.splice(i, 1)
    //            i--;
    //        }
    //    }
    //}
    //return arr;
    //
    // With filter(), includes(), and the spread syntax:
    // Copy a new array of the arguments to the function
    const args = [...arguments];
    // Remove the first element of the args array, the array arr, unshift()
    args.unshift();
    // Return a new array that does not also contain any elments with the same
    // value as any of the values in the args array, filter(), includes()
    return arr.filter(elem => !args.includes(elem));
}

// Clever with filter(), includes(), and the rest parameter syntax:
// Per MDN: The rest parameter syntax allows a function to accept an indefinite
// number of arguments as an array
//
//function destroyer(arr, ...argumentValues) {
//    // Return a new array that does not also contain any elments with the same
//    // value as any of the values in the arguments array, filter(), includes()
//    return arr.filter(elem => !argumentValues.includes(elem));
//}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

