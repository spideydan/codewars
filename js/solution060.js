

// Write a function that checks if a given string(case insensitive) is a palindrome.

// isPalindrome("Madam"), true)

function isPalindrome(x) {
    let newX = x.split('').reverse().join('').toLowerCase()
    if (newX === x.toLowerCase()) {
        return true
    } else {
        return false
    }
}