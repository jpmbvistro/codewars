/*******************************************************
=======================Codewars=========================
Odd or Even?
https://www.codewars.com/kata/5949481f86420f59480000e7/
********************************************************/
function oddOrEven(array) {
  if(array.length===0) return 'even'
   return array.reduce((acc, current)=>acc+current)%2 ? 'odd' : 'even'
}
