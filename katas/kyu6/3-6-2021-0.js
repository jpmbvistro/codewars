/*****************
Codewars
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/
Persistent Bugger
*******************/

function persistence(num) {
   let digits = num.toString().split('')
   console.log(digits)
   let counter = 0
   while(digits.length > 1){
     digits = (digits.reduce((accu, currentVal) => accu *= currentVal)).toString().split('')
     counter++
   }
  return counter
