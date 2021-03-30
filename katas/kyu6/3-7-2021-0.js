/*****************
Codewars
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/
Find the missing Letter
*******************/
function findMissingLetter(array)
{
  for (let i = 0; i < array.length; i++){
    if(array[i].charCodeAt() !== array[0].charCodeAt()+i){
      return String.fromCharCode(array[i].charCodeAt()-1)
    }
  }
}
