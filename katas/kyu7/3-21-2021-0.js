/*******************************************************
=======================Codewars=========================
Billiards pyramid
https://www.codewars.com/kata/5bb3e299484fcd5dbb002912/
Note: Quick Math
********************************************************/
function pyramid(balls) {
  let j=0
  for(let i = 1; i <= balls;i++){
    j++
    balls -= i
  }
  return j
}
