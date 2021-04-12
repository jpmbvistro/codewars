/*******************************************************
=======================Codewars=========================
English beggars
https://www.codewars.com/kata/59590976838112bfea0000fa
********************************************************/
function beggars(values, n){
  let newValues = [...values]
  let solution = new Array(n)

  if(newValues.length>0) solution.fill(0)

  let index=0
  while(newValues.length>0){

    solution[index] +=newValues.shift()
    index = (index+1)%n
  }
  console.log(solution.slice(0,n))
  return  solution.slice(0,n)
}
