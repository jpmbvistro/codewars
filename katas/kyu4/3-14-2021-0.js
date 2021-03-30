/*******************************************************
=======================Codewars=========================
Remove Zeroes
https://www.codewars.com/kata/52aae14aa7fd03d57400058f/
Note: Array Prototype methods are
not allowed, nor are temporary objects/arrays
This required old school array traversal
Initial implementation utilized while loop and temporary
variables to keep track of array length
refactored for code compactness/cleanliness
********************************************************/

function removeZeros(array) {
  let i = 0 //index may not move during traversal because of data shift
  for (let k = 0 ; k < array.length ; k++){
     if(array[i] === 0 || array[i] === "0"){
      let zeroVal = array[i]
      for(let index = i ; index < array.length-1 ; index++){
        array[index] = array[index+1]
      }
      array[array.length-1] = zeroVal
    } else {
      i++
    }
  }
  return array;
}
