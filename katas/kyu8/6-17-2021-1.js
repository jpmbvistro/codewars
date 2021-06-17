/*******************************************************
=======================Codewars=========================
The Feast of Many Beasts
https://www.codewars.com/kata/5aa736a455f906981800360d
********************************************************/
function feast(beast, dish) {
  return dish.endsWith(beast[beast.length-1]) && dish.startsWith(beast[0])
}
