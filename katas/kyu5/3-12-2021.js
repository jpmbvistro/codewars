/**************
Codewars
https://www.codewars.com/kata/52597aa56021e91c93000cb0
Moving Zeroes to End
**************/

var moveZeros = function (arr) {
  zeroes = 0
  arr.forEach(item => {
    if(item===0){zeroes++}}
   )
  arr = arr.filter(zitem=>zitem!==0)
  for (i=0 ; i<zeroes ;i++){
    arr.push(0)
  }
  return arr
}
