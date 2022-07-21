// Paremeters: A single array with multiple types of elements including numbers, strings, booleans
//Return : a single array with the same elements but the zeroes are moved to the end of the array.
//Examples: moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]
//moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])

//Pseudo: iterate over the starting array and identify the zeroes. We could take the existing zeroes and move them to the end of the array or we could count he zeroes, remove them, then append the correct number of zeroes to the end of the array.


// proposed solution - iterate through the original array and assign each value to a new array bucket depending on if zero or not. join the buckets together and output.

function moveZeros(array) {
    let catchAll = []
    let zeros = []
    for (let i = 0; i < array.length; i++) {
        array[i] === 0 ? zeros.push(array[i]) : catchAll.push(array[i])
    }
    return [...catchAll, ...zeros]
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])