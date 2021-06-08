/*******************************************************
=======================Codewars=========================
Kaprekar Split
https://www.codewars.com/kata/5b6ee22ac5cc71833f0010d7
********************************************************/
function kaprekarSplit(n){
  let squaredString = n*n+''
  for (let i = 0; i <= squaredString.length ; i++){
    let partA = Number(squaredString.slice(0,i))
    let partB = Number(squaredString.slice(i,squaredString.length))
    if(partA+partB === n ) return i
  }
  return -1
}
