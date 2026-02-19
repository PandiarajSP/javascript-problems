// Array of characters in teh string 
let str = "pandi";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}

console.log(result);

// Array of characters in the array
let arr = ["a", "l", "e", "x"];
let result2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    result2.push(arr[i]);
}

console.log(result2);