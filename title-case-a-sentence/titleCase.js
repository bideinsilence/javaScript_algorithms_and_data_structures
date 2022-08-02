// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words
// like the and of.


function titleCase(str) {
    //// With a loop:
    //// Make all letters in str lower case
    //const lowerCase = str.toLowerCase();
    //// Break str into an array of individual words
    //const words = lowerCase.split(" ");
    //// New array for capitalized words
    //const capitalized = [];
    //// Loop through each word in array
    //for (let word of words ) {
    //    // Capitalize the first letter of word (string), concatinate the rest of
    //    // the word (string), and add capitalized word (string) to capitalized
    //    // array
    //    capitalized.push(word.charAt(0).toUpperCase() + word.slice(1));
    //}
    //// Return new string with words from array joined by an empty space
    //return capitalized.join(" ");
    // With replace() and regex:
    return str
        // Make all letters lower case
        .toLowerCase()
        // Match any character following a whitespace or matching the first character of the whole string
        .replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));

