/*******************************************************
=======================Codewars=========================
Map over a list of lists
https://www.codewars.com/kata/606b43f4adea6e00425dff42/
********************************************************/
function gridMap(fn,a) {
  let sol = []
  a.forEach(item=>sol.push(item.map(fn)))
  return sol;
}
