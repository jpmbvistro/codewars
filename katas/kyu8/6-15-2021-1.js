/*******************************************************
=======================Codewars=========================
Transportation on vacation
https://www.codewars.com/kata/568d0dd208ee69389d000016
********************************************************/
function rentalCarCost(d) {
  return d >= 7 ? 40 * d - 50 : d >= 3 ? d * 40 - 20 : d * 40
}
