/***********
Codewars
https://www.codewars.com/kata/598057c8d95a04f33f00004e/
Get Integers between 2 numbers
************/

function range(startNum, endNum)
{
 let answer = []
 for(let i = startNum + 1 ; i < endNum ; i++){
   answer.push(i)
 }
  return answer
};
