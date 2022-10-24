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
