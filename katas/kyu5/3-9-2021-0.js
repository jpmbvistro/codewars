/*********
Codewars
First non-repeating character
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/
********/

function firstNonRepeatingLetter(s) {
  let booleanLetters = new Array(s.length)
  booleanLetters.fill(true)
  for (let i = 0 ; i < s.length ; i++){
    //checks if the value has already been passed in a previous check, thereby avoiding unnecessary loop
    if(booleanLetters[i]) {
      for (let j = i+1 ; j < s.length ; j++) {
        if( s.charAt(j).toUpperCase() === s.charAt(i).toUpperCase()) {
          booleanLetters[i] = false
          booleanLetters[j] = false
        }
      }
      //Since the letters are checked left to right, the first letter that returns true is the first letter without repeats
      if(booleanLetters[i]){break}
    }
  }
  return s.charAt(booleanLetters.indexOf(true))
}
