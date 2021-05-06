/*******************************************************
=======================Codewars=========================
Sum of Triangular Numbers
https://www.codewars.com/kata/580878d5d27b84b64c000b51
********************************************************/
function sumTriangularNumbers(n) {
  let sol = 0
  let counter = 0
  for (let i = 0 ; i<=n ; i++){
    for(let j = 1 ; j <= i ; j++){
      counter++
    }
    sol += counter
  }


  return sol;
}
