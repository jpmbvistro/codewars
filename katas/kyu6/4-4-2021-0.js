/*******************************************************
=======================Codewars=========================
Tortoise racing
https://www.codewars.com/kata/55e2adece53b4cdcb900006c/

****Don't do this problem, very poor decimal rounding assumptions*****
********************************************************/
function race(v1, v2, g) {
  if(v1 >= v2) return null
  let sol = g/(v2-v1)
  let answer =[]
  console.log(sol)
  answer.push(Math.floor(sol))
  sol = sol%1
  console.log(sol*60)
  answer.push(Math.floor(Math.round(sol*6000)/100))
  sol = (sol*60)%1
  console.log(sol*60)
  answer.push(Math.floor(Math.round(sol*6000)/100)%60)
  return answer

}
