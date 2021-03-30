/***********
Codewars
https://www.codewars.com/kata/60113ded99cef9000e309be3
Separate Basic types
************/
function separateTypes(input) {
  let numbers = input.filter(item => typeof item === 'number')
  let strings = input.filter(item => typeof item === 'string')
  let booleans = input.filter(item => typeof item ==='boolean')
  let toReturn = {}
  if (numbers.length>0) {
    toReturn.number = numbers
  }
  if (strings.length>0) {
    toReturn.string = strings
  }
  if (booleans.length>0) {
    toReturn.boolean = booleans
  }
  return toReturn
}
