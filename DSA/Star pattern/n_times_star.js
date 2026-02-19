let n = 5;

for (let i = 0; i < n; i++) {
    // every row should be empty on each iteration
    let row = "";
    for (let j = 0; j < n; j++) {
        // Add the n times of stars into the row variable
        row += "*";
    }
    console.log(row);
}