/*******************************************************
=======================Codewars=========================
Lario and Muigi Pipe Problem
https://www.codewars.com/kata/56b29582461215098d00000f/
********************************************************/
function pipeFix(numbers){
  let news =[]
  for (let i = numbers[0] ; i<=numbers[numbers.length-1];i++){
    news.push(i)
  }
  return news
}
