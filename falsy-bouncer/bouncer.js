// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.


function bouncer(arr) {
  // Return only elements, filter(), that convert to true, Boolean()
  return arr.filter(element => Boolean(element));
}

console.log(bouncer([7, "ate", "", false, 9]));

