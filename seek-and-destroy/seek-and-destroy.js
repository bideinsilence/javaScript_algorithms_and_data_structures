// You will be provided with an initial array (the first argument in the
// destroyer function), followed by one or more arguments. Remove all elements
// from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.


function destroyer(args) {
    // Per MDN: arguments is an Array-like object accessible inside functions
    // that contains the values of the arguments passed to that function
    // The first argument passed to this function is always an array
    const initialArray = arguments[0];
    // Index through each elment of the array
    for (let i = 0; i < initialArray.length; i++) {
        // For each element of the array, index through the remaining arguments
        // of the function
        for (let j = 1; j < arguments.length; j++) {
            // If the value of an elment in the array is the same value as an
            // argument to the function, remove that element from the array
            if (initialArray[i] === arguments[j]) {
                // As splice() removes an element from the array (mutates the
                // array), the index, i, still increments and the next element
                // after the matched value is skipped. A simple solution is to
                // decrement the index variable so that it does not skip the
                // next element in the array.
                initialArray.splice(i, 1)
                i--;
            }
        }
    }
    return initialArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

