/*******************************************************
=======================Codewars=========================

Simple Fun #176: Reverse Letter
https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/
********************************************************/
function reverseLetter(str) {
  return str.replace(/[^a-zA-Z]/ig, "").split('').reverse().join('')
}
