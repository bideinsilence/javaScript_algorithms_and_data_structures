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
    //// Return accumulator
    //return sum;
    //
    // Cleaner, using Math.min(), Math.max(), and the spread operator:
    // Accumulator to return
    let sum = 0;
    // Find the smaller of the two numbers, Math.min()
    const min = Math.min(...arr);
    // Find the larger of the two numbers, Math.max()
    const max = Math.max(...arr);
    // Interate through each increasing value in range, inclusive
    for (let i = min; i <= max; i++) {
        // Add that value to the accumulator
        sum += i;
    }
    // Return accumulator
    return sum;
    //
    //// With the formula for finding the sum of consecutive numbers and
    //// Math.abs():
    //// (first number + last number)(n / 2) = sum, where n is the number of
    //// integers
    //const firstNumber = arr[0];
    //const lastNumber = arr[1];
    //// Find the number of integers in the range; the absolute value,
    //// Math.abs(), of the first number subtracted from the last, + 1 to
    //// include the first number in the total
    //const numberOfIntegers = Math.abs(lastNumber - firstNumber) + 1;
    //// Return the summation formula
    //return (firstNumber + lastNumber) * (numberOfIntegers / 2);
    //
    //// Recursive solution using destructering assignment, the spread operator,
    //// sort(), and the ternary operator:
    //// Sort the array from smallest to largest, sort(), and assign the smaller
    //// number as first and the larger number as last
    //const [first, last] = [...arr].sort((a, b) => a - b);
    //// If the value of first number does not equal the last, return the first
    //// value added to another call of the equation passing an array of
    //// [first + 1, last] as the argument; if the values are equal return only
    //// the first value
    //return first !== last
    //    ? first + sumAll([first + 1, last])
    //    : first;
}

sumAll([1, 4]);

