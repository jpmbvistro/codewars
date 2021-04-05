/*******************************************************
=======================Codewars=========================
Sums of Parts
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/
********************************************************/
function partsSums(ls) {
  ls.push(0)
  for (let i = ls.length-2 ; i >= 0 ; i--){
    ls[i] = ls[i]+ ls[i+1]
  }
  return ls
}
