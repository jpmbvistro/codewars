/*******************************************************
=======================Codewars=========================
Last Survivor
https://www.codewars.com/kata/609eee71109f860006c377d1
********************************************************/
function lastSurvivor(letters, coords) {
  while(coords.length>0){
    let splitLetters = letters.split('')
    splitLetters.splice(coords.shift(),1)
    letters = splitLetters.join('')
  }
  return letters
}
