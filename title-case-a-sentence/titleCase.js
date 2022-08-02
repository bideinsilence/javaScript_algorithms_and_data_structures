// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words
// like the and of.


function titleCase(str) {
    // Break str into an array of individual words
    const words = str.split(" ");
    // New array for capitalized words
    const capitalized = [];
    // Loop through each word in array
    for (let word of words ) {
        // New word with all letters in word lowercase
        const lowerWord = word.toLowerCase();
        // Capitalize the first letter of word (string), concatinate the rest of
        // the word (string), and add capitalized word (string) to capitalized
        // array
        capitalized.push(lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1));
    }
    // Return new string with words from array joined by an empty space
    return capitalized.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

