/*******************************************************
=======================Codewars=========================
What's the real floor?
https://www.codewars.com/kata/574b3b1599d8f897470018f6
********************************************************/
function getRealFloor(n) {
  return n < 1 ? n : n >= 13 ? n-2 : n - 1
}