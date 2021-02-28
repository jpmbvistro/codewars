/***********
Codewars
https://www.codewars.com/kata/5b45e4b3f41dd36bf9000090
Guess the sequence
Not a good challenge (description is unhelpful and suggests multiple sequence cases despite only accepting one case)
************/
function sequence(x) {
  let arrayray = [[],[],[],[],[],[],[],[],[]]
  for(let i=1; i<=x; i++){
    arrayray[Number((i+'').charAt(0))-1].push(i)
  }
  return arrayray.reduce((accum, currentArray) => accum.concat(currentArray))
}
