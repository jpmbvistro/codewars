/*******************************************************
=======================Codewars=========================
Stop gninnipS My sdroW!
https://www.codewars.com/kata/5264d2b162488dc400000001/
********************************************************/
function spinWords(bruh){
  return bruh.split(' ').map(word=>{
    return word.length>=5 ? word.split('').reverse().join('') : word
  }).join(' ')
}
