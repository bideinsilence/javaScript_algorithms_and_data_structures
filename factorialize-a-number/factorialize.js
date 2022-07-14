// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product
// of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.


function factorialize(num) {
//    let f = 1;
//    for (let i = num; i > 0; i--) {
//        f = f * i;
//    }    
//    return f;
// Or, using recursion:
    if ( num < 1) {
    // 0 multiplied by anything is 0, and !0 === 1
        return 1;
    } else {
    let f = factorialize(num - 1);
    // num is multiplied by and stored as the factorial accumulator after the
    // rescursive call has returned. At the point where num is multiplied,
    // factorialize(n - 1) has already been evaluated and returned
    // [n - 1, ..., 2, 1].
    f *= num;
    return f;
    }
}

factorialize(5);

