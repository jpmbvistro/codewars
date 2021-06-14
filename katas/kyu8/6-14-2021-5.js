/*******************************************************
=======================Codewars=========================
Sum Mixed Array
https://www.codewars.com/kata/57eaeb9578748ff92a000009
********************************************************/
function sumMix(x){
  return x.map(item=> {return typeof item === "string"? parseInt(item) : item}).reduce((acc,curr)=>acc+curr)
}
