/*******************************************************
=======================Codewars=========================
Greatest common divisor
https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/
********************************************************/
function mygcd(x,y){
  if(x===y)return x
  let divisor = Math.min(x,y)
  let dividend = Math.max(x,y)
  while(dividend%divisor>=1){
    let oldEnd = dividend
    dividend = divisor
    divisor = oldEnd%divisor
  }
  return divisor
}
