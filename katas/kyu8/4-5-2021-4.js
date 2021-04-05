/*******************************************************
=======================Codewars=========================
All Star Code Challenge #18
https://www.codewars.com/kata/5865918c6b569962950002a1
********************************************************/
function strCount(str, letter){
  let count = 0
  str = str.split('')
  while(str.indexOf(letter)!=-1){
    count++
    str[str.indexOf(letter)] = ''
  }
  return count
}
