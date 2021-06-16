/*******************************************************
=======================Codewars=========================
Stringy Strings
https://www.codewars.com/kata/563b74ddd19a3ad462000054
********************************************************/
function stringy(size) {
  let bin = '1'
  let sol = ''
  for(let i = 0 ; i < size ; i++){
    sol += bin
    bin = bin==='1' ? "0" : "1"
  }
  return sol
}
