/**
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
**/
//I learned that you cant use reduce on an array with a single value
function arrayMadness(a, b) {
  // Ready, get set, GO!!!

  let totalA = 0
  let totalB = 0
  a.forEach(item => totalA += item**2)
  b.forEach(item => totalB += item**3)
  return totalA> totalB
}
