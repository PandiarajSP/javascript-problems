let n = 5;

// this is one method
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j < i + 1; j++) {
        row += j;
    }
    console.log(row);
}

// n-i times is another method
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row += (j + 1);
    }
    console.log(row);
}

/*
    12345
    1234
    123
    12
    1

*/