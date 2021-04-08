/*******************************************************
=======================Codewars=========================
Elimination Tournament
https://www.codewars.com/kata/5f631ed489e0e101a70c70a0/
********************************************************/
const tourney = array => {
  let boop = []
  while(array.length>1){
    boop.push(array)
    let newArray = []
    for(let i =0 ; i<array.length ;i+=2){
      if(array[i+1]){
        newArray.push(array[i]>array[i+1]?array[i]:array[i+1])
      } else{
        newArray.unshift(array[i])
      }
    }
    array = newArray
  }
  boop.push(array)

  return boop
}
