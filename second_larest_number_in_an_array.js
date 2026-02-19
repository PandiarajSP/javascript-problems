function findSecondLargestNumber(arr) {
    // Not an array
    if (!Array.isArray(arr)) return "Invalid input";
    // Single element
    if (arr.length < 2) return "Array should have atleast 2 elements";

    let firstLargest = secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (!Number.isFinite(arr[i])) return "Invalid input present inside the array";
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest)
            // Second condition helps when array contains duplicate elements
            secondLargest = arr[i];
    }
    return secondLargest;

}

let arr = [4, 9, 0, 2, 8, 7, 1];
console.log(findSecondLargestNumber(arr))
// Empty array
console.log(findSecondLargestNumber([]))
// One element in an array
console.log(findSecondLargestNumber([1]))
// Duplicate elements
console.log(findSecondLargestNumber([20, 20, 10, 20, 20]))