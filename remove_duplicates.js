let arr = ['a', 'b', 'c', 'd', 'c'];
// removing duplicates from the array
const uniqueElements = arr.filter((item, index) => {
    return arr.indexOf(item) == index;
})
console.log("Unique elements - " + uniqueElements);
// extract duplicate elements
const duplicateElements = arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
})
console.log("Duplicate elements - " + duplicateElements);
