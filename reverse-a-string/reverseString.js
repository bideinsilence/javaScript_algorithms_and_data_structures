// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


function reverseString(str) {
    return str.split("").reverse().join("");
    // Or:
    //let newString = "";
    //// Depricating loop; str.length - i is the index of the last character
    //for (let i = str.length - 1; i >= 0; i--) {
    //    newString += str[i]
    //}
    //return newString;
}

console.log(reverseString("hello"));

