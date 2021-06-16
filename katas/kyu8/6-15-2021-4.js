/*******************************************************
=======================Codewars=========================
Find numbers which are divisible by given number
https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
********************************************************/
function divisibleBy(numbers, divisor){
  return numbers.filter(item=> item%divisor === 0)
}
