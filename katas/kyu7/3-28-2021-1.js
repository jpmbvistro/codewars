/*******************************************************
=======================Codewars=========================

Reverse a Number
https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
********************************************************/
function reverseNumber(n) {
  let arrayed = Math.abs(n).toString().split('')
  let answer =[]
  arrayed.forEach((item, i)=>{
    answer.unshift(item)
  })
  answer = answer.join('')
  return Math.sign(n)* Number(answer)
}
