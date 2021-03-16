/*******************************************************
=======================Codewars=========================
Simple Fun #159: Middle Permutation
https://www.codewars.com/kata/58ad317d1541651a740000c5/
 *****In Progress***
********************************************************/
function middlePermutation(s) {
  let permutations,lengthTemp
  permutations = lengthTemp = s.length
  while (lengthTemp > 1){
    lengthTemp--
    permutations*=lengthTemp
  }
  let indexMid = Math.floor(permutations/2)-1

  s = s.split('')
  let stack = [s[0]]

  //go through each of the letters
  for(let i = 1 ; i < s.length ; i++){
    let newStack =[]
    //We take each item currently in the stack and insert i at all positions
    stack.forEach((item, index)=>{
      for( let j = 0 ; j <= item.length ; j++){
        newStack.push(item.substring(0,j)+s[i]+item.substring(j))
      }
    })
    stack = newStack
  }
  stack.sort()
  return stack[indexMid]
}
