// Return an array consisting of the largest number from each provided
// sub-array. For simplicity, the provided array will contain exactly 4
// sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access
// each member with array syntax arr[i].


// I actually made it return an array with the largest number from each provided
// sub-array without limiting it to 4 sub-arrays.
function largestOfFour(arr) {
    const newArray = [];
    let largestNumber;
    for (let i = 0; i < arr.length; i++) {
        // Set the first number in a sub array as the base largest number for
        // that array
        // Works with arrays of numbers that are all less than 0
        largestNumber = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if ( arr[i][j] > largestNumber ) {
                largestNumber = arr[i][j];
            }
        }
        newArray.push(largestNumber)
        largestNumber = 0;
    }
    return newArray;
}

largestOfFour(
    [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
);

