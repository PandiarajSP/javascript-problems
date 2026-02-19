let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";
    // empty spaces
    for (let j = 0; j < n - (i + 1); j++) {
        row += " ";
    }
    // printing stars
    for (let k = 0; k < i + 1; k++) {
        row += "*"
    }
    console.log(row);
}