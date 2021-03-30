/*******************************************************
=======================Codewars=========================
Perimeter of squares in a rectangle
https://www.codewars.com/kata/559a28007caad2ac4e000083
********************************************************/
function perimeter(n) {
  let lastSide = 0
  let currentSide = 1
  let totalSide = 1
  for(let i = 0 ; i<n ; i++ ){
    totalSide += currentSide + lastSide
    let tempCurrent = currentSide
    currentSide += lastSide
    lastSide = tempCurrent
  }
  return 4 * totalSide
}
