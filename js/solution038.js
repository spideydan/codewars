// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata(but not y).

// The input string will only consist of lower case letters and / or spaces.



function getCount(str) {
    // list out vowels to count
    // aeiou
    let vowels = ['a', 'e', 'i', 'o', 'u']
    // start vowelCount at 0
    let vowelCount = 0
    // loop through string
    for (let i = 0; i < str.length; i++) {
        // loop through vowels to filter by
        for (let y = 0; y < vowels.length; y++) {
            // if current element of str is === to element of vowel, increase vowelCount by 1
            if (str[i] === vowels[y]) {
                vowelCount++
            }
        }
    }
    return vowelCount
}