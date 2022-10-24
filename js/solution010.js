<<<<<<< HEAD
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  //P strings
  //R returning numbers in array
  //E ('CodEWaRs'), [0,3,4,6]
  //P
  /* take in string
    loop through string
    find where the index of the string is
    return number of indexes in array */
  let emptyArr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      emptyArr.push(i);
    }
  }
  return emptyArr;
};
=======
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


function stringy(size) {
    var str = '';
    for (var i = 1; i <= size; i++) {
        str += i % 2;
    }
    return str;
}
>>>>>>> 367c4158545638836e576375b19cd5c2816ac9de
