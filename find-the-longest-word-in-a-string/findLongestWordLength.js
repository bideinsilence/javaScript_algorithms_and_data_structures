// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWordLength(str) {
    // With reduce():
    //return str
    //    // Split string into an array of individual words
    //    .split(" ")
    //    // Compare words in array and return the longest
    //    // longest word begins as an empty string
    //    .reduce((longest, current) => {
    //        if ( current.length > longest.length ) {
    //            return current;
    //       } else {
    //         return longest;
    //        }
    //    }, "")
    //    // Numeric length of longest word
    //    .length;
    // Or, with sort:
    //return str
    //    // Split string into an array of individual words
    //    .split(" ")
    //    // Sort words by length, longest to shortest
    //   .sort((a, b) => b.length - a.length)
    //    // Remove and return the value of the first word
    //    .shift()
    //    // Numeric length of longest word
    //    .length;
    // Or, with a for loop
    // Split string into an array of individual words
    const words = str.split(" ");
    // Set a store for the longest length value of a word
    let longestLength = 0;
    for (const word of words) {
        // If a word's length is longer than longest length, set that length
        // value as the longest
        if ( word.length > longestLength) {
            longestLength = word.length;
        }
    }
    return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

