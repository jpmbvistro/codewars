/*******************************************************
=======================Codewars=========================
All Star Code Challenge #20
https://www.codewars.com/kata/5865a75da5f19147370000c7/
********************************************************/
function addArrays(array1, array2) {
  if(array1.length!==array2.length) throw new Error("Nope")
  return array1.map((item,i)=>item+array2[i])
}
