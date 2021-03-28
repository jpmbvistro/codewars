/*******************************************************
=======================Codewars=========================

Count salutes
https://www.codewars.com/kata/605ae9e1d2be8a0023b494ed/
********************************************************/
function countSalutes(hallway) {
  hallway  = hallway.split('').filter((item,i)=>item!=='-')
  let right = hallway.map((item, i)=>item==='>'? i : null).filter(item=>item!==null)
  console.log(right)
  let count = 0
  right.forEach((item, i)=>{
    count += hallway.slice(item).filter(item=>item==='<').length
  })
  return count *2
}
