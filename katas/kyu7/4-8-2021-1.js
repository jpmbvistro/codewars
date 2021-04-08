/*******************************************************
=======================Codewars=========================
Slaphead
https://www.codewars.com/kata/57efab9acba9daa4d1000b30/
********************************************************/
function bald(x){
  let numHair = x.split('').filter(item=>item=='/').length
  let res = ''
  if(numHair === 0) res= "Clean!"
  else if(numHair === 1) res =  'Unicorn!'
  else if(numHair === 2) res= 'Homer!'
  else if(numHair >=3 && numHair <= 5) res=  'Careless!'
  else res = 'Hobo!'
  return [new Array(x.length).fill('-').join(''), res]
}
