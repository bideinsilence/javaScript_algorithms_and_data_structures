// Truncate a string (first argument) if it is longer than the given maximum
// string length (second argument). Return the truncated string with a ...
// ending.


function truncateString(str, num) {
    // Compare str length to maximum string length num
    if ( str.length > num ) {
        //// With a for loop:
        //// New string to return
        //let truncated = "";
        //// Concatinate num number of characters to the new string from the old
        //for (let i = 0; i < num; i++) {
        //    truncated += str[i];
        //}
        //// Return the new string with ... added to the end
        //return truncated += "...";
        //// With split(), splice(), and join():
        //// Split the string into a new array of single character strings
        //let truncated = str.split("");
        //// Remove the end of the array from index num and add "..." to the end
        //truncated.splice(num, truncated.length - num, "...")
        //// Return the array rejoined into a string
        //return truncated.join("");
        // With slice():
        // Return the string from index 0 to index num (exclusive) with ...
        // added to the end
        return str.slice(0, num) + "..."
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

