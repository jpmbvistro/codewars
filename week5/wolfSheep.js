/*
https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
Wolf in sheeps clothing
*/

function warnTheSheep(queue) {
  let wolf = queue.reverse().indexOf('wolf')
  return ( wolf >0 ? `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep")
}
