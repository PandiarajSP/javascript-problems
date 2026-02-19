let arr = ['a', 's', 's', 'y', 'y', 'a', 'r', 'u'];

let obj = {};
let duplicates = {};
for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]] = obj[arr[i]] + 1;
    } else {
        obj[arr[i]] = 1;
    }
}
for (let key in obj) {
    if (obj[key] > 1)
        duplicates[key] = obj[key];
}
console.log(duplicates);