/*******************************************************
=======================Codewars=========================
Counting Duplicates
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
********************************************************/
function duplicateCount(text){
  if (text.length===0) return 0
  text = text.toLowerCase()
  let textArray = text.split('').sort()
  let counter = [textArray[0]]
  for(let i=1 ; i<text.length; i++) {
    if(counter[counter.length-1].charAt(0)===textArray[i]) counter[counter.length-1]+=textArray[i]
    else counter.push(textArray[i])
  }

  return counter.filter(item=>item.length>1).length
}
