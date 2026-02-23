
function countDigits(n) {
    if (n === 0) return 1;
    if (!Number(n) || !Number.isFinite(n)) return "Give valid input";
    n = Math.abs(n);
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countDigits(256));
console.log(countDigits(""));
console.log(countDigits(0));
console.log(countDigits(-345));
console.log(countDigits([]));
console.log(countDigits({}));
console.log(countDigits(null));
console.log(countDigits(undefined));