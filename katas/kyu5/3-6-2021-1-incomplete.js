/*****************
Codewars
https://www.codewars.com/kata/55c04b4cc56a697bb0000048/
Scramblies
*******************/
//Not done
function scramble(str1, str2) {
  key = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  str1Compact = new Array(36).fill('')

  str2Compact = new Array(36).fill('')
  //compress strings into each array
  for(let i = 0 ; i < str1.length ; i++) {
    let char = str1.charAt(i)
    str1Compact[key.indexOf(char)] += char
  }
//   console.log(str1)
  console.log(str1)
  console.log(str1Compact)
}




//Tried
// function scramble(str1, str2) {
//
//   let containsString = true
//
//   for ( let i = 0 ; i < str2.length && str1.length > 0 && containsString; i ++) {
//     character = str2[i]
//     containsString = containsString && str1.includes(character)
//
//     if(containsString){
//       let index = str1.indexOf(character)
//       str1 = str1.slice(0,index) + str1.slice(index+1)
//     } else {
//       break
//     }
//   }
//
//   return containsString
// }

//Following took too long
// function scramble(str1, str2) {
//   let containsString = true
//   str2.split('').forEach(character => {
//     containsString = containsString && str1.includes(character)
//     if(containsString){
//       str1 = str1.slice(0,str1.indexOf(character)) + str1.slice(str1.indexOf(character)+1)
//     }
//   })
//   return containsString
// }
