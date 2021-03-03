/**************
codewars
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/
Find the Parity Outlier
**************/

function findOutlier(integers){
  //Check if even or odd
  let evens = []
  let odds = []
  integers.forEach(element => {
    element%2 ? odds.push(element) : evens.push(element)
  })
  return evens.length > odds.length ? odds[0] : evens[0]
}
