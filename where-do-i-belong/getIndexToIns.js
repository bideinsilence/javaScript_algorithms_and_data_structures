// Return the lowest index at which a value (second argument) should be inserted
// into an array (first argument) once it has been sorted. The returned value
// should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is
// greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array
// has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)
// and greater than 5 (index 1).


function getIndexToIns(arr, num) {
  //// Original solution:
  //// sort() arr lowest to highest
  //arr.sort((a, b) => a - b); 
  //// Variable to store lowest index number
  //let lowestIndex = 0;
  //// Iterate over the new array
  //for (let i = 0; i < arr.length; i++) {
  //    // If value num is greater than the value of arr at index i, assign lowest index to index i + 1
  //    // Does nothing once the value of arr at index i is greater than num 
  //    if ( num > arr[i] ) {
  //        lowestIndex = i + 1;
  //    }
  //}
  //return lowestIndex;
  //
  //// Maybe cleaner?:
  //// sort() arr lowest to highest into a new array 
  //arr.sort((a, b) => a - b); 
  //// Iterate over the new array
  //for (let i = 0; i < arr.length; i++) {
  //    // If the value of arr at index i is greater than or equal to num, return index i; covers the majority of cases
  //    if ( arr[i] >= num ) {
  //        return i;
  //    }
  //}
  //// Else, such as when num is greater than any value in arr
  //// arr.length gives next highest index number
  //return arr.length;
  //
  // Clever with filter():
  // Count the number of elements that are smaller than the new value num, filter()
  // num would be added at the index (.length) after these values
  return arr.filter(element => element < num).length;
}

console.log(getIndexToIns([40, 60], 50));

