/*******************************************************
=======================Codewars=========================
Speed Control
https://www.codewars.com/kata/56484848ba95170a8000004d
********************************************************/
function gps(s, x) {
  if (x <=1) return 0
  let hrlySpd = []
  for(let i= 0; i<x.length-1 ; i++ ){
    hrlySpd.push(3600*(x[i+1]-x[i])/s)
  }

  console.log(hrlySpd)
  return Math.floor(Math.max(...hrlySpd))
}
