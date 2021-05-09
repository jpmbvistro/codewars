/*******************************************************
=======================Codewars=========================
Alphabet symmetry
https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
********************************************************/
function solve(arr){
  let aCode = 97
  let sol = []
  arr.forEach((item,i)=>{
    item=item.toLowerCase()
    sol.push(0)
    for(let j = 0 ; j < item.length ; j++){
      if(item.charCodeAt(j)===aCode+j) sol[sol.length-1]++
    }
  })
  return sol
};
