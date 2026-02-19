let arr = [1, [2, [3, 4]]];

function flattenArr(n) {
    let result = [];

    for (let item of n) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArr(item))
        }
        else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenArr(arr))