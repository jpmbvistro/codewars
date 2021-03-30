/*******************************************************
=======================Codewars=========================

Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
https://www.codewars.com/kata/58381907f8ac48ae070000de/
********************************************************/
function isLanguageDiverse(list) {
  let python = list.filter(item=>item.language==='Python').length
  let ruby = list.filter(item=>item.language==='Ruby').length
  let js = list.filter(item=>item.language==='JavaScript').length
  return python <= ruby*2 && python <= js*2 && ruby <= python*2 && ruby <= js*2 && js <= ruby*2 && js <= python*2
}
