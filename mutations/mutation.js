// Return true if the string in the first element of the array contains all of
// the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello
// does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in
// line are present in Alien.


function mutation(arr) {
    // Store a new lowercase copy of each string in arr, arr[0] and arr[1]
    const stringA = arr[0].toLowerCase();
    const stringB = arr[1].toLowerCase();
    // Iterate over each character in the second string, stringB
    for (let i = 0; i < stringB.length; i++) {
        // indexOf() returns -1 if value at stringB index i is not found in stringA
        if ( stringA.indexOf(stringB[i]) < 0 ) return false;
    }
    // Else, if all values in stringB are found in stringA
    return true;
    //
    //// Clever with split(), every(), and indexOf():
    //// Lowercase, toLowerCase(), the second string, arr[1], turn it into an
    //// array of letters, split(), and make sure every letter is also present in
    //// the lowercased first string, arr[0]
    //// indexOf() returns -1 if the current letter is not found
    //return arr[1]
    //    .toLowerCase()
    //    .split("")
    //    .every(letter => {
    //        return arr[0]
    //            .toLowerCase()
    //            .indexOf(letter) !== -1;
    //    });
}

mutation(["hello", "hey"]);

