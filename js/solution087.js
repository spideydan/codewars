// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(arr) {

    // console.log(arr.reduce((x, y) => x + Number(y), 0))
    e = arr.map(x => Number(x))
    // return e.reduce( (x, y) => x + y ,0)
    let newInt = 0
    for (i = 0; i < e.length; i++) {
        newInt += e[i]
    }
    return newInt
}
