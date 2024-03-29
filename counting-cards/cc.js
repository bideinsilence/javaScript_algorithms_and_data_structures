// In the casino game Blackjack, a player can determine whether they have an
// advantage on the next hand over the house by keeping track of the relative
// number of high and low cards remaining in the deck. This is called Card
// Counting.

// Having more high cards remaining in the deck favors the player. Each card is
// assigned a value according to the table below. When the count is positive,
// the player should bet high. When the count is zero or negative, the player
// should bet low.

// Count Change    Cards
//     +1	       2, 3, 4, 5, 6
//      0	       7, 8, 9
//     -1	       10, 'J', 'Q', 'K', 'A'

// You will write a card counting function. It will receive a card parameter,
// which can be a number or a string, and increment or decrement the global
// count variable according to the card's value (see table). The function will
// then return a string with the current count and the string Bet if the count
// is positive, or Hold if the count is zero or negative. The current count and
// the player's decision (Bet or Hold) should be separated by a single space.

// Example Outputs: -3 Hold or 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.


let count = 0;

function cc(card) {
    // Only change code below this line
    // With a switch statement:
    // Return a string with current count and Bet or Hold
    function betOrHold() {
        if ( count > 0 ) {
            return `${ count } Bet`;
        } else {
            return `${ count } Hold`;
        }
    }

    // Increment or decrement count according to the value of card and return a
    // call to betOrHold()
    switch ( card ) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            return betOrHold();
        case 7:
        case 8:
        case 9:
            return betOrHold();
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            return betOrHold();
    }
    //
    //// With if, else if, and the || (or), operator:
    //// Return a string with current count and Bet or Hold
    //function betOrHold() {
    //    if ( count > 0 ) {
    //        return `${ count } Bet`;
    //    } else {
    //        return `${ count } Hold`;
    //    }
    //}
    //// Increment or decrement count according to the value of card and return a call to betOrHold()
    //if ( card === 2 ||
    //    card === 3 ||
    //    card === 4 ||
    //    card === 5 ||
    //    card === 6 ) {
    //    count++;
    //    return betOrHold();
    //} else if (card === 7 ||
    //    card === 8 ||
    //    card === 9) {
    //    return betOrHold();
    //} else {
    //    count--;
    //    return betOrHold();
    //}
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

