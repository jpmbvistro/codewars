/*******************************************************
=======================Codewars=========================
Are they the "same"?
https://www.codewars.com/kata/550498447451fbbd7600041c
********************************************************/
function comp(array1, array2){
  if(array1===null||array2===null) return false
  if(array1) array1.sort((a,b)=>a-b)
  if(array2) array2.sort((a,b)=>a-b)
  let answer = true
  let length = array1.length
  for(let i = 0 ; i < length ; i++){
    if(array2.includes(array1[0]*array1[0])){
      answer = true
      array1.shift()
      array2.shift()
    } else {
      answer = false
      break
    }

  }
  return answer
}
