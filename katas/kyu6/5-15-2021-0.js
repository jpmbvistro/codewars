/*******************************************************
=======================Codewars=========================
Word to initial number
https://www.codewars.com/kata/5bb148b840196d1be50000b1
********************************************************/
function convert(s) {
  let numbers = ['1','0','2','3','4','5','6','7','8','9']
  let key = {}
  let outputNumber = 0
  let arrayStringByDigit = s.toLowerCase().split('')
  arrayStringByDigit.forEach((item,i)=>{
    if(key[item]===undefined){
      key[item] = numbers.shift()
    }
    outputNumber += key[item]
  })
  return parseInt( outputNumber )

}
