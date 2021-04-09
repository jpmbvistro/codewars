/*******************************************************
=======================Codewars=========================
Generic numeric template formatter
https://www.codewars.com/kata/59901fb5917839fe41000029/
********************************************************/
function numericFormatter(template,number='1234567890'){
  console.log(template)
  let templateArray = template.split('')
  let numIndex = 0
  templateArray.forEach((item,i)=>{
//     console.log(/([a-z])/.test(item))
    if(/([a-zA-Z])/.test(item)){
      templateArray[i] = number.charAt(numIndex)
      numIndex = (numIndex+1)%number.length
    }
  })
  return templateArray.join('')
}
