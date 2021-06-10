/*******************************************************
=======================Codewars=========================
Logical calculator
https://www.codewars.com/kata/57096af70dad013aa200007b
********************************************************/
function logicalCalc(array, op){
  return Boolean(array.reduce((acc,curr)=>{
    switch(op){
        case "AND":
          return acc && curr
          break
        case "OR":
          return acc || curr
          break
        case "XOR":
          return acc ^ curr
          break
    }
  }))
}
