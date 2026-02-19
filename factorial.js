// iterative
function factorial(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
// n(n-1)
function factorialRecursion(n) {
    if (n == 0) return 1;
    return n * factorialRecursion(n - 1);
}

console.log(factorial(3))
console.log(factorialRecursion(5))