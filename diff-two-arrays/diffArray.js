//Compare two arrays and return a new array with any items only found in one of
//the two given arrays, but not both. In other words, return the symmetric
//difference of the two arrays.

// Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    //// With a for loop and indexOf():
    //// New array to return
    //const newArray = [];

    //function onlyFound(first, second) {
    //    // For each index in the first array
    //    for (let i = 0; i < first.length; i++) {
    //        // indexOf() will return -1 if the elment at index i in the first array, first[i], isn't found in the second array
    //        if ( second.indexOf(first[i]) === -1 ) {
    //            // Add the unique element to the new array
    //            newArray.push(first[i]);
    //        }
    //    }
    //}

    //// Find all elements only found in one the two given arrays and add them to the new array
    //onlyFound(arr1, arr2);
    //onlyFound(arr2, arr1);

    //return newArray;
    //
    // Clean solution with filter() and includes():
    // New Array to return
    return arr1
        // Return an array of items, filter(), from the first array that are not found in the second array, includes()
        .filter(element => !arr2.includes(element))
        // Add, concat(), to the returned array an array of items, filter(), from the second array that are not included in the first array, includes()
        .concat(arr2.filter(element => !arr1.includes(element)))
    //
    //// Previous solution with || (or):
    //// Return a combined array, concat()
    //return arr1.concat(arr2).filter(element =>
    //    // With elements found in only one of the uncombined arrays
    //    // If not found, !includes(), in either array == not in both
    //    !arr1.includes(element) ||
    //    !arr2.includes(element)
    );
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

