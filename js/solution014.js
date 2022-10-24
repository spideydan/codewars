//P Take in an array of numbers
//R Sum of the differences between consecutive pairs in the array in descending order
// E sumOfDifferences([-3, -2, -1]), 2
// sumOfDifferences([1, 2, 10]), 9
//P Take in array. Sort array into desending order. Get difference between consecutive pairs in the array. Get sum.

function sumOfDifferences(arr) {
    arr = arr.sort((x, y) => y - x)
    let sum = 0
    for (let i = 0; i < arr.length - 1; i++) {
        sum += (arr[i] - arr[i + 1])
    }
    return sum
}
