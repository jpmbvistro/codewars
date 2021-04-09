/*******************************************************
=======================Codewars=========================
Which are in?
https://www.codewars.com/kata/550554fd08b86f84fe000a58/
Used reduce in this! Really great exercise in utilizing
reduce besides adding numbers
********************************************************/
function inArray(array1,array2){
  return array1.filter(item=>{
    return array2.reduce((acc,curr)=>acc || curr.includes(item),false)
  }).sort()
}
