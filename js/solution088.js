// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.


function sortedNoDuplicates(arr, num) {
    return arr.filter(x => x % 2 === 0).slice(-num)
}


sortedNoDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
sortedNoDuplicates([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
sortedNoDuplicates([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)