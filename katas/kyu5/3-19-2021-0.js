/*******************************************************
=======================Codewars=========================
Valid Parentheses
https://www.codewars.com/kata/52774a314c2333f0a7000688

********************************************************/
function validParentheses(parens){
  let stack = []
  let answer = true
  let length = parens.length
  for(let i = 0 ; i < length ;i++){
    if(parens.charAt(0)==='('){
      stack.push(parens.charAt(0))
    } else{
      if(stack.length>0){
        stack.pop()
      } else {
        answer = false
        break
      }
    }
    parens = parens.substring(1)
  }
  return !stack.length && answer
}
