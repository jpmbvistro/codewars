/*******************************************************
=======================Codewars=========================
Merge two sorted arrays into one
https://www.codewars.com/kata/5899642f6e1b25935d000161/
********************************************************/
function mergeArrays(arr1, arr2) {
  console.log(arr1,arr2)
  return Array.from(new Set(new Array(...arr1, ...arr2).sort((a,b)=>a-b)))
}
