/*********
Codewars
Permutations
www.codewars.com/kata/5254ca2719453dcc0b00027d

********/

function permutations(string) {
  let solution = []
  for (let i = 0; i < string.length ; i++){
    helperPermutation(string.charAt(i), string.slice(0,i)+string.slice(i+1), solution)
  }
  return solution
}

/***
helperPermutation
lockedString: string passed through to end of recursion
permuteMe: string to recurse through
**/
function helperPermutation(lockedString, permuteMe, solutionArray){
  if(permuteMe.length===0){
    if(!solutionArray.includes(lockedString)){
      solutionArray.push(lockedString)
      return
    } else{
      console.log('already contained')
      return
    }
  }
  for (let i = 0 ; i < permuteMe.length ; i++) {
    let newLockedString = lockedString +permuteMe.charAt(i)
    let start = permuteMe.slice(0,i)
    let end = permuteMe.slice(i+1)
    helperPermutation(newLockedString, start+end, solutionArray)
    helperPermutation(newLockedString, end+start, solutionArray)

  }
}
