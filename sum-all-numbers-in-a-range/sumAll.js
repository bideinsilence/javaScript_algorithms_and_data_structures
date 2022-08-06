// We'll pass you an array of two numbers. Return the sum of those two numbers
// plus the sum of all the numbers between them. The lowest number will not
// always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers
// between 1 and 4 (both inclusive) is 10.


function sumAll(arr) {
    //// Original solution:
    //// Accumulator to return
    //let sum = 0;
    //// If first value is smaller than the second
    //if ( arr[0] < arr[1] ) {
    //    // Iterate through each increasing value in range, inclusive
    //    for (let i = arr[0]; i <= arr[1]; i++) {
    //        // Add the value to the accumulator
    //        sum += i;
    //    }
    //} else {
    //    // Iterate through each decreasing value in range, inclusive
    //    for (let i = arr[0]; i >= arr[1]; i--) {
    //        // Add that value to the accumulator
    //        sum += i;
    //    }
    //}
    //return sum;
    //
    // Cleaner, using Math.min() and Math.max():
    // Accumulator to return
    let sum = 0;
    // Find the smaller of the two numbers, Math.min()
    const min = Math.min(arr[0], arr[1]);
    // Find the larger of the two numbers, Math.max()
    const max = Math.max(arr[0], arr[1]);
    // Interate through each increasing value in range, inclusive
    for (let i = min; i <= max; i++) {
        // Add that value to the accumulator
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);

