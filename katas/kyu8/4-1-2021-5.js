/*******************************************************
=======================Codewars=========================
Is there a vowel in there?
https://www.codewars.com/kata/57cff961eca260b71900008f
********************************************************/
function isVow(a){
  return a.map(lett=>lett==='a'.charCodeAt() ? 'a' : lett).map(lett=>lett==='e'.charCodeAt() ? 'e' : lett).map(lett=>lett==='i'.charCodeAt() ? 'i' : lett).map(lett=>lett==='o'.charCodeAt() ? 'o' : lett).map(lett=>lett==='u'.charCodeAt() ? 'u' : lett)
}
