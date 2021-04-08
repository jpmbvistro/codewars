/*******************************************************
=======================Codewars=========================
Generate range of integers
https://www.codewars.com/kata/55eca815d0d20962e1000106
********************************************************/
function generateRange(min, max, step){
  let sol = []
  for(let i = min ; i <= max ; i+=step){
    sol.push(i)
  }
  return sol
}
