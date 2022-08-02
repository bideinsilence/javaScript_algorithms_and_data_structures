// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the
// function runs.


function frankenSplice(arr1, arr2, n) {
    //// With a for loop:
    //// New copy of arr2 to return
    //const newArray = arr2.slice();
    //// Loop through each element in arr1 and splice() eache element into the
    //// newArray starting at index n, increment n with each pass (n + i), with
    //// 0 deletions
    //for (let i = 0; i < arr1.length; i++) {
    //    newArray.splice(n + i, 0, arr1[i]);
    //}
    //return newArray;
    //// With spread operator and splice():
    //// New copy of arr2 to return
    //// Spread operator returns the elements of the array instead of an array
    //const newArray = [...arr2];
    //// Splice in all the elements of arr1 at index n with 0 deletions
    //newArray.splice(n, 0, ...arr1);
    //return newArray;
    // With spread operators and slice():
    // Return a new array [], with the elements of arr2 from index 0 to n
    // (exclusive), all the elements of arr1, and the elements of arr2 starting
    // with n through the end of the array
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

