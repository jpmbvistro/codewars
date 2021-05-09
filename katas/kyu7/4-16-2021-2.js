/*******************************************************
=======================Codewars=========================
Rotate for a Max
https://www.codewars.com/kata/56a4872cbb65f3a610000026/
********************************************************/
function maxRot(n) {
  console.log(`OG: ${n}`)
  let nArray = `${n}`.split('')
  let solution = []
  for(let i=0 ; i<nArray.length ; i++){
    let leftOver = nArray.splice(i,1)
    nArray.push(leftOver[0])
    solution.push(parseInt(nArray.join('')))
    console.log(nArray)
  }
  console.log(solution)
  return Math.max(...solution,n)
}
