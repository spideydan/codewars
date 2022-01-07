// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let arr1sum = arr1.reduce((x, y) => x + y, 0)
    let arr2sum = arr2.reduce((x, y) => x + y, 0)
    return arr1sum + arr2sum
}