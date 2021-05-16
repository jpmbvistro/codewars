/*******************************************************
=======================Codewars=========================
Sort Strings by Most Contiguous Vowels
https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/
********************************************************/
function sortStringsByVowels(strings){
  return strings.sort((a,b)=>{
    let aBase = a.toLowerCase()
    let bBase = b.toLowerCase()
    let longestA = aBase.match(/([a|e|i|o|u])*/g).sort((c,d)=>d.length-c.length)[0]
    let longestB = bBase.match(/([a|e|i|o|u])*/g).sort((c,d)=>d.length-c.length)[0]
    return longestB.length - longestA.length
  })
}
