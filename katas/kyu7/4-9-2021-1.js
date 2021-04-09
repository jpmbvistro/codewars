/*******************************************************
=======================Codewars=========================
Tribonacci Sequence
https://www.codewars.com/kata/556deca17c58da83c00002db
********************************************************/
function tribonacci(signature,n){
  let answer = []
  while (answer.length<n){
    if(0<signature.length){
      answer.push(signature.shift())
    } else {
      answer.push(answer[answer.length-1]+answer[answer.length-2]+answer[answer.length-3])
    }
  }
  return answer.slice(0,n)
}
