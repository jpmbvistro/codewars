/*******************************************************
=======================Codewars=========================

Coding Meetup #10 - Higher-Order Functions Series - Create usernames
https://www.codewars.com/kata/582a53ed261c2af9d200018c
********************************************************/
function addUsername(list) {
  list = list.map((item, i)=> {
    item.username = `${item.firstName.toLowerCase()}${item.lastName.toLowerCase().substring(0,item.lastName.length-1)}${new Date().getFullYear()-item.age}`
    return item
  })
  return list
}
