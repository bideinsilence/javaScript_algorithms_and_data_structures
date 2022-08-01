// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number. For the purpose of
// this challenge, do not use the built-in .repeat() method.


function repeatStringNumTimes(str, num) {
    // With a for loop:
    // Return an empty string if num is not positive
    if ( num < 0 ) return "";
    // New string to return
    let  repeatString = "";
    // Concatinate the new string with the value of input str for num number of times
    for (let i = 0; i < num; i++) {
        repeatString += str;
    }
    return repeatString;
    //// With recursion:
    //// Return an empty string if num is 0 or not positive
    //if ( num <= 0 ) return "";
    //// Return str if num times is 1
    //if ( num === 1 ) return str;
    //// "abc" + ("abc", 3 - 1) + "abc" + ("abc", 2 - 1 ) + "abc"
    //// "abc" + "abc" + "abc"
    //// "abcabcabc"
    //return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);

