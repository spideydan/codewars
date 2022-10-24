function xor(a, b) {
    if (a === true && b === true) {
        return false
    } else if (a === true || b === true) {
        return true
    } else if (a === false || b === false) {
        return false
    }
}

// Return true only if a OR b is equal to true, not both.