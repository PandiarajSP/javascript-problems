let n = 10;
let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    
    for (let j = 0; j < i; j++) {
        row += toggle;
        toggle = toggle == 1 ? 0 : 1;
    }
    console.log(row);
}

/*
Continous 10101010
1
01
010
1010
10101
010101
0101010
10101010
101010101

*/