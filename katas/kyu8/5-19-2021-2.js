/*******************************************************
=======================Codewars=========================
Abbreviate a Two Word Name
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/
********************************************************/
function abbrevName(name){
  return name.match(/(\b[A-z])/g).join('.').toUpperCase()
}
