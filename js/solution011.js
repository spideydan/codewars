// Parameters - a string with varying numbers of words in it. Words may have punctuation marks seperated by a space.
// Results - string of one or multiple words, seperated by spaces, with 'ay' appended to the end of each word UNLESS that word is a punctuation mark
// Examples - pigIt('Pig latin is cool');  igPay atinlay siay oolcay || pigIt('Hello world !');    elloHay orldway !
//Pseudo - Split the string into individual words, then split each word into two parts - the first letter, and the rest of the string. Reverse the order of the parts, and concatinate them back together. Check if a word is actually a punctuation mark and if it is NOT, then add "ay" to the end. Concatinate the individual words back into a single string and return.

// push, slice, charCodeAt, split, join, map, reverse, match

function pigIt(string) {
    let marks = ['.', '!', '?', ',', '"']
    let result = string.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')
    return result
}

pigIt('Hello world !')
// test example
console.log('elloHay orldway !')