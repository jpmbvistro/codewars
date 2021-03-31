/*******************************************************
=======================Codewars=========================

Valid string
https://www.codewars.com/kata/52f3bb2095d6bfeac2002196/
only works if dictionary does not include substrings between its contents
********************************************************/
var validWord = function(dictionary, word) {
  let stack = ''
  let answer = true
  for (let i = 0 ; i < word.length ; i++) {
    stack += word.charAt(i)
    if(dictionary.includes(stack)) stack = ''
  }
  return stack.length===0
};
