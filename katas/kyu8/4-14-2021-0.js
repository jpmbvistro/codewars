/*******************************************************
=======================Codewars=========================
Calculate Average
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
********************************************************/
function find_average(array) {
  return array.reduce((acc,curr)=>acc+curr)/array.length
}
