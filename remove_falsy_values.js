// Removing all the falsy values
// Use Boolean
let arr = [1,2, 0, false, 3, -5, null, undefined, NaN, -10];

const result = arr.filter(Boolean);

console.log(result);