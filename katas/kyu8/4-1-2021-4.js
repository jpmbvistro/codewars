/*******************************************************
=======================Codewars=========================
Convert number to reversed array of digits
https://www.codewars.com/kata/5583090cbe83f4fd8c000051
********************************************************/
function digitize(n) {
  return n.toString().split('').reverse().map(n=>parseInt(n))
}
