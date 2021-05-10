/*******************************************************
=======================Codewars=========================
shorter concat [reverse longer]
https://www.codewars.com/kata/54557d61126a00423b000a45
********************************************************/
function shorter_reverse_longer(a,b){
  let shorter = a.length < b.length ? a : b
  let longer = a.length >= b.length ? a : b
  return `${shorter}${longer.split('').reverse().join('')}${shorter}`
}
