// We'll pass you an array of two numbers. Return the sum of those two numbers
// plus the sum of all the numbers between them. The lowest number will not
// always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers
// between 1 and 4 (both inclusive) is 10.


function sumAll(arr) {
    // Accumulator to return
    let sum = 0;
    // If first value is smaller than the second
    if ( arr[0] < arr[1] ) {
        // Loop through each increasing value in range, inclusive
        for (let i = arr[0]; i <= arr[1]; i++) {
            // Add value to accumulator
            sum += i;
        }
    } else {
        // Loop through each decreasing value in range, inclusive
        for (let i = arr[0]; i >= arr[1]; i--) {
            // Add value to accumulator
            sum += i;
        }
    }
    return sum;
}

sumAll([1, 4]);

