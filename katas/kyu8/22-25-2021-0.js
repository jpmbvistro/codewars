/**************
https://www.codewars.com/kata/58cb43f4256836ed95000f97
Difference of Volumes of Cuboids
***************/

function findDifference(a, b) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return Math.abs(a.reduce(reducer)-b.reduce(reducer))
}
