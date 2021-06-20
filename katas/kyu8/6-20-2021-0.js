/*******************************************************
=======================Codewars=========================
L1: Bartender, drinks!
https://www.codewars.com/kata/568dc014440f03b13900001d/
********************************************************/
function getDrinkByProfession(param){
  let cypher = {
    'jabroni':'Patron Tequila',
    'school counselor':'Anything with Alcohol',
    'programmer':'Hipster Craft Beer',
    'bike gang member':'Moonshine',
    'politician':'Your tax dollars',
    'rapper':'Cristal'}
  return cypher[param.toLowerCase()] || "Beer"
}
