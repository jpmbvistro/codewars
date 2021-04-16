/*******************************************************
=======================Codewars=========================
Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
https://www.codewars.com/kata/583a8bde28019d615a000035/
********************************************************/
function findOddNames(list) {
  return list.filter(item=>{
    return item.firstName.split('').reduce((acc,curr)=>acc+curr.charCodeAt(0),0)%2
  })
}
