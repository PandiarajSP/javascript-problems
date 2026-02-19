let input = 1234;
let result = 0;

while(input > 0) {
    // getting remainder
    let s = input % 10;
    // Adding the remainder value with the result
    result = result + s;
    // Assign the remaining values present inside the input
    input = Math.floor(input/10);
}

console.log(result);