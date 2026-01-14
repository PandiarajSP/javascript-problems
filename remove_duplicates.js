let arr = ['a', 'b', 'c', 'd', 'c'];

const result = arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
})

console.log(result);