/*******************************************************
=======================Codewars=========================
All unique
https://www.codewars.com/kata/553e8b195b853c6db4000048/

********************************************************/
function hasUniqueChars(str){
  let answer = true
  str = str.split('')
  let passed = []
  str.forEach((item, i)=>{
    console.log(item.charCodeAt(0))
    let charCode = item.charCodeAt(0)
     if(passed.includes(charCode)){
       answer = false
     } else{
       answer = answer && true
      passed.push(charCode)
     }
  })
  return answer
}
