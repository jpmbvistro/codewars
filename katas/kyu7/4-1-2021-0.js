/*******************************************************
=======================Codewars=========================

Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
https://www.codewars.com/kata/5827acd5f524dd029d0005a4
********************************************************/
function isRubyComing(list) {
  return list.filter(dev=>dev.language==='Ruby').length > 0
}
