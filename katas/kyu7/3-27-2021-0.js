/*******************************************************
=======================Codewars=========================

Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
https://www.codewars.com/kata/582746fa14b3892727000c4f
Great series to practice HOF
********************************************************/
function countDevelopers(list) {
  return list.filter(item=>item.continent==='Europe'&&item.language ==='JavaScript').length
}
