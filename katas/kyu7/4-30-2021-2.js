/*******************************************************
=======================Codewars=========================
Find the vowels
https://www.codewars.com/kata/5680781b6b7c2be860000036
********************************************************/
function vowelIndices(word){
  word = word.toLowerCase()
  let vowels = ['a','e','i','o','u','y']
  let sol = []
  for(let i = 0 ; i < word.length ; i++){
    if(vowels.includes(word.charAt(i))) sol.push(i+1)
  }
  return sol
}
