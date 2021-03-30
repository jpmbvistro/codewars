/*******************************************************
=======================Codewars=========================
Coding Meetup #7 - Higher-Order Functions Series - Find the most senior develope
https://www.codewars.com/kata/582887f7d04efdaae3000090
Great series to practice HOF
********************************************************/
function findSenior(list) {
  let elder  = []
  list.forEach((item, i) => {
    if(elder.length===0 || elder[0].age===item.age){
      elder.push(item)
    } else if(elder[0].age < item.age){
      elder = [item]
    }
  })
  return elder
}
