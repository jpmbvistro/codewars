/*******************************************************
=======================Codewars=========================
Isograms
https://www.codewars.com/kata/54ba84be607a92aa900000f1/
********************************************************/
function isIsogram(str){
  str= str.toLowerCase().split('').sort()
  return str.join('')===Array.from(new Set(str)).join('')
}
