// Write a function that splits an array (first argument) into groups the length
// of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    //// Original Solution:
    //// New array to return
    //const newArray = [];
    //// Variable to hold sub-arrays
    //let subArray = []
    //// Loop untl the length of arr is equal to or smaller than the value of
    //// size
    //// The shift() call is mutating arr and will eventually stop the loop
    //while (arr.length > size) {
    //    // Create a new sub-array of length size by removing the first element
    //    // of arr, shift(), and adding it to subArray, push()
    //    for (let i = 0; i < size; i++) {    
    //        subArray.push(arr.shift());  
    //    }
    //    // Add the sub-array to the new array, push()
    //    newArray.push(subArray)
    //    // Assign subArray to a new empty array
    //    subArray = [];
    //}
    //// Add the remaining arr array to the new array, push()
    //newArray.push(arr);       
    //return newArray;
    //
    // Cleaner using splice():
    // New array to return
    let newArray = [];
    // Loop; splice() is mutating arr and will eventually stop the loop
    while (arr.length > 0) {
        // Add, push(), "chunks", splice(), of arr of length size, (0, size), to the new array
        newArray.push(arr.splice(0, size));
    }
    return newArray;
    //
    //// Using slice() without changing arr:
    //// New array to return
    //let newArray = [];
    //// Increment the length of arr in "chunks" of the value of size
    //for (let i = 0; i < arr.length; i += size) {
    //    // Add, push(), "chunks" of arr, slice(), of size, (i, i + size), to the new array
    //    newArray.push(arr.slice(i, i + size));
    //}
    //return newArray;
    //
    // Recursive with slice() and concat():
    //if (arr.length <= size) {
    //    return [arr];
    //} else {
    //    return [arr.slice(0, size)].concat(
    //        chunkArrayInGroups(arr.slice(size), size)
    //    );
    //}
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

