/*******************************************************
=======================Codewars=========================
Shortest steps to a number
https://www.codewars.com/kata/5cd4aec6abc7260028dcd942/
********************************************************/
function shortestStepsToNum(num) {
  let count = 0
  while(num>1){
    if(num%2){
      count++
      num--
    }
    count++
    num/=2
  }
  return count
}
