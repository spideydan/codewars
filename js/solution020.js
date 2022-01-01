function pipeFix(numbers){
    let emptyArr = []
    let beginningNum = numbers[0]
    let endingNum = numbers.pop()
    for (let i = beginningNum; i <= endingNum; i++){
      emptyArr.push(i)
    }
    return emptyArr
  }
  
  
  //P An array of numbers
  //R An array of numbers that fills in the gaps between the numbers that are given
  //E pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]
  //pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12])
  //pipeFix([6,9]),[6,7,8,9]
  //P Take in array of numbers, return an array of consecutive numbers in between the numbers that are given
  
  // some useful methods? 
  //map, for loop, foreach, 