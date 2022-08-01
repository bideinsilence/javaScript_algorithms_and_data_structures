// Check if a string (first argument, str) ends with the given target string
// (second argument, target).

// This challenge can be solved with the .endsWith() method, which was
// introduced in ES2015. But for the purpose of this challenge, we would like
// you to use one of the JavaScript substring methods instead.


function confirmEnding(str, target) {
    //// With a for loop:
    //// Loop through the number of characters in the target string
    //// i starts at 0 for string index
    //for (let i = 0; i < target.length; i++) {
    //    // Index str starting at a distance from the end of str equivilant to
    //    // the start of target, (str.length - target.length + i)
    //    // Return false if the value at str index doesn't match the value at
    //    // target index
    //    if ( str[str.length - target.length + i] !== target[i] ) {
    //        return false;
    //    }
    //}
    //// If all characters match,
    //return true;
    // With substring():
    // Returns true if the string (substring) starting at the index from the end
    // of str (str.length) minus the length of the target string (target.length)
    // is the same as the target string, false if not
    return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

