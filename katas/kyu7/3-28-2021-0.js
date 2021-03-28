/*******************************************************
=======================Codewars=========================

Coding Meetup #2 - Higher-Order Functions Series - Greet developers
https://www.codewars.com/kata/58279e13c983ca4a2a00002a/
Great series to practice HOF
********************************************************/
function greetDevelopers(list) {
  return list.map(item=>{
    item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`
    return item
  })
}
