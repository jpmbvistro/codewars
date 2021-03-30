/*******************************************************
=======================Codewars=========================
***TW: Suicide***
Josephus Permutation
https://www.codewars.com/kata/5550d638a99ddb113e0000a2
****TW: Suicide***
********************************************************/
function josephus(items,k){
//   console.log(`items: ${items} \n Interval: ${k}`)
  let index = (k-1)%items.length
  let answer = []
  while(items.length >0){
//     console.log()

    answer.push(items.splice(index,1)[0])
    index = (index+k-1)%items.length
//     console.log(`Items: ${items}`)
//     console.log(`Answer: ${answer}`)
  }
  return answer
}
