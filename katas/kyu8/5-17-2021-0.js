/*******************************************************
=======================Codewars=========================
Gravity Flip
https://www.codewars.com/kata/5f70c883e10f9e0001c89673/
********************************************************/
const flip=(d, a)=>{
  return d==='L' ? a.sort((a,b)=>b-a) : a.sort((a,b)=>a-b)
}