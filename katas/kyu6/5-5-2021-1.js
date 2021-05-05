/*******************************************************
=======================Codewars=========================
Count characters in your string
https://www.codewars.com/kata/52efefcbcdf57161d4000091/
********************************************************/
function count (string) {
  let sol = {}
  string = string.split('')
  string.forEach((item,i)=>{
    if(Object.keys(sol).includes(item)){
      sol[item]++
    } else {
      sol[item] = 1
    }
  })
  return sol
}
