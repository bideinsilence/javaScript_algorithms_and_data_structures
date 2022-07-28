// Return an array consisting of the largest number from each provided
// sub-array. For simplicity, the provided array will contain exactly 4
// sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access
// each member with array syntax arr[i].


// I actually made it return an array with the largest number from each provided
// sub-array without limiting it to 4 sub-arrays.
function largestOfFour(arr) {
    // New array to return
    const newArray = [];
    // Loop through each sub-array at index i of argument array arr
    for (let i = 0; i < arr.length; i++) {
        // Set the first number in a sub-array at index i as the initial largest
        // number for that array
        // Works with arrays of numbers that are all less than 0
        let largestNumber = arr[i][0];
        // Loop through each number at index j in sub-array at index i
        for (let j = 0; j < arr[i].length; j++) {
            // Assign largestNumber as number at index j if larger than current
            // value
            if ( arr[i][j] > largestNumber ) {
                largestNumber = arr[i][j];
            }
        }
        // Add number to new array
        newArray[i] = largestNumber;
    }
    return newArray;
    //// Or with sort():
    //// New array to return
    //const largestNumbers = [];
    //// Loop through each 4 sub-arrays at index i of argument array arr
    //for (let i = 0; i < 4; i++) {
    //// Sort the values in each sub-array from smallest to largest (sort),
    //// return the largest value (pop), and add that value to our new array
    //// (push)
        //largestNumbers.push(arr[i].sort((a, b) => a - b).pop());
    //}
    //return largestNumbers;
    //// Or With Math.max():
    //// New array to return
    //const largestNumbers = [];
    //// Loop through each 4 sub-arrays at index i of argument array arr
    //for (let i = 0; i < 4; i++) {
    //    // Add (push) the largest value (Math.max) in each sub-array to the new
    //    // array
    //    largestNumbers.push(Math.max(...arr[i]));
    //}
    //return largestNumbers;
    
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

