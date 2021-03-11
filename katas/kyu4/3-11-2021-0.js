/*********
Codewars
Snail
https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
console logs removed on final submission
********/
snail = function(array) {
  // enjoy
  let solutionArray = []

  if(array[0][0]!==undefined){
    let direction = 0
    let currentPosition = [0,0]
    let check = [checkRight,checkDown, checkLeft, checkUp]
    let attempt = 0
    while (attempt < 4){
      console.log(`current coordinates: (x:${currentPosition[1]},y:${currentPosition[0]})`)
      console.log('solution:')
      console.log(solutionArray)
      if(check[direction%4](currentPosition, array)){

        attempt = 0
        solutionArray.push(array[currentPosition[0]][currentPosition[1]])
        array[currentPosition[0]][currentPosition[1]]=undefined
        currentPosition = check[direction%4](currentPosition, array)
        console.log('moving...')
      } else {
        console.log('no luck.... trying next direction')
        attempt++
        direction++
      }
//       console.log(solutionArray)
    }
    console.log('*****Nowhere else to go*******')
    solutionArray.push(array[currentPosition[0]][currentPosition[1]])
  }
  return solutionArray
}

function checkRight(coordinates, array){
  console.log('Checking right')
  if(array[coordinates[0]] !== undefined && array[coordinates[0]][coordinates[1]+1] !== undefined){
    console.log('I can go to ')
    return [coordinates[0],coordinates[1]+1]
  }
  return false
}
function checkDown(coordinates, array){
  console.log('Checking down')
  if(array[coordinates[0]+1] !== undefined && array[coordinates[0]+1][coordinates[1]] !== undefined){
    return [coordinates[0]+1,coordinates[1]]
  }
  return false
}
function checkLeft(coordinates, array){
  console.log('Checking left')
  if(array[coordinates[0]] !== undefined && array[coordinates[0]][coordinates[1]-1] !== undefined){
    return [coordinates[0],coordinates[1]-1]
  }
  return false
}
function checkUp(coordinates, array){
  console.log('Checking up')
  if(array[coordinates[0]-1] !== undefined && array[coordinates[0]-1][coordinates[1]] !== undefined){
    return [coordinates[0]-1,coordinates[1]]
  }
  return false
}
