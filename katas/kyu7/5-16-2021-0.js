/*******************************************************
=======================Codewars=========================
Largest pair sum in array
https://www.codewars.com/kata/556196a6091a7e7f58000018
********************************************************/
function largestPairSum(numbers)
{
  numbers = numbers.sort((a,b)=>a-b)
  return numbers.pop() + numbers.pop()
}
