/*******************************************************
=======================Codewars=========================
Beginner Series #3 Sum of Numbers
https://www.codewars.com/kata/55f2b110f61eb01779000053/
********************************************************/
function getSum( a,b )
{
  let sol = Math.max(a,b)
  for(let i = Math.min(a,b) ; i < Math.max(a,b) ;i++){
    sol+=i
  }
  return sol
}
