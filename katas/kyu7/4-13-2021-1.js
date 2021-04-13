/*******************************************************
=======================Codewars=========================
Filter Long Words
https://www.codewars.com/kata/5697fb83f41965761f000052/
********************************************************/
function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(item=> item.length > n)
}
