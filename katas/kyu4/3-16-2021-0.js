/*******************************************************
=======================Codewars=========================
Simple Fun #159: Middle Permutation
https://www.codewars.com/kata/58ad317d1541651a740000c5/
Still incomplete
********************************************************/

//Trying to use Factoradics
function middlePermutation(s) {
  console.log(s)
  let evenOdd = s.length%2===0 ? "Even" : "Odd"
  console.log(evenOdd)

  //convert string s into array and sort
  s=s.split('')
  s.sort()
//   console.log(s)

  //find number of permutations
  let permutations,lengthTemp
  permutations = lengthTemp = s.length
  while (lengthTemp > 1){
    lengthTemp--
    permutations*=lengthTemp
  }
  console.log(`Permutations: ${permutations}`)
  //find center index
  let indexMid = permutations%2===0 ? Math.floor((permutations-1)/2) : Math.floor(permutations/2)
  console.log(`IndexMid: ${indexMid}`)

  //now convert indexMid into its factoradic form to find nth permutation
  let tempIndexMid  = indexMid+1
  let factoradicArray = []
  for (let i = 1 ; tempIndexMid !==0 ; i++){
    factoradicArray.unshift(tempIndexMid%i)
    tempIndexMid = Math.floor(tempIndexMid/i)
  }
  console.log(factoradicArray)
//   let factoradicMid = Number.parseInt(factoradicArray.join(''))
//   console.log(factoradicMid)
  let answer =[]
  for ( let i = 0 ; i < factoradicArray.length ; i++) {
    answer.push(s.splice(factoradicArray[i],1))
//     console.log(s)
  }

  return answer.join('')
}

// function middlePermutation(s) {
//   let permutations,lengthTemp
//   permutations = lengthTemp = s.length
//   while (lengthTemp > 1){
//     lengthTemp--
//     permutations*=lengthTemp
//   }
//   let indexMid = Math.floor(permutations/2)-1
//
//   s = s.split('')
//   let stack = [s[0]]
//
//   //go through each of the letters
//   for(let i = 1 ; i < s.length ; i++){
//     let newStack =[]
//     //We take each item currently in the stack and insert i at all positions
//     stack.forEach((item, index)=>{
//       for( let j = 0 ; j <= item.length ; j++){
//         newStack.push(item.substring(0,j)+s[i]+item.substring(j))
//       }
//     })
//     stack = newStack
//   }
//   stack.sort()
//   return stack[indexMid]
// }
