/*******************************************************
=======================Codewars=========================
Cat and Mouse - Easy Version
https://www.codewars.com/kata/57ee24e17b45eff6d6000164/
********************************************************/
function catMouse(x){
  return x.split('').filter(let=>let===".").length <=3 ? 'Caught!' : 'Escaped!'
}
