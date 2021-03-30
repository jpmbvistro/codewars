/****************
Codewars
https://www.codewars.com/kata/517abf86da9663f1d2000003
Convert String to Camel Case
****************/

/*****Refactored*****/
function toCamelCase(str){
  let arrayStrings = Math.sign(str.indexOf('-'))===1 ? str.split('-') : str.split('_')

  for (let i = 1 ; i < arrayStrings.length ; i++){
      arrayStrings[i] = arrayStrings[i].charAt(0).toUpperCase() + arrayStrings[i].slice(1)
  }
  return arrayStrings.join('')

}

/****Original****/
// function toCamelCase(str){
//   let arrayStrings =''
//   console.log(Math.sign(str.indexOf('_'))===1)
//   if(Math.sign(str.indexOf('-'))===1){
//     console.log('hyphen')
//     arrayStrings = str.split('-')
//
//   } else if (Math.sign(str.indexOf('_'))===1){
//     console.log('underscore')
//     arrayStrings = str.split('_')
//   } else {
//     return str
//   }
//
//   for (let i = 1 ; i < arrayStrings.length ; i++){
//       arrayStrings[i] = arrayStrings[i].charAt(0).toUpperCase() + arrayStrings[i].slice(1)
//   }
//   return arrayStrings.join('')
//
// }
