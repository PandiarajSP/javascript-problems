function fiboNacci(n) {
    let index1 = 0;
    let index2 = 1;

    console.log(index1);
    if (n == 1) return;
    console.log(index2);
    if (n < 1) return 'Invalid terms';

    for (let i = 3; i <= n; i++) {
        let curr = index1 + index2;
        index1 = index2;
        index2 = curr;
        console.log(curr);
    }
}

const result = fiboNacci(9);
console.log(result);