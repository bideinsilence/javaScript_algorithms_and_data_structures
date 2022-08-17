//Compare two arrays and return a new array with any items only found in one of
//the two given arrays, but not both. In other words, return the symmetric
//difference of the two arrays.

// Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    // Clean solution with filter() and includes():
    // New Array to return
    return arr1
        // Return an array of items, filter(), from the first array that are not found in the second array, includes()
        .filter(element => !arr2.includes(element))
        // Add, concat(), to the returned array an array of items, filter(), from the second array that are not included in the first array, includes()
        .concat(arr2.filter(element => !arr1.includes(element)))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

