/*********
Codewars
https://www.codewars.com/kata/570564e838428f2eca001d73/
ChuckNorris 1
Error Reported: Prompt asks that "FAIL!!" be returned if something besides a string is returned. But provided test exerts that an empty string should also return "FAIL!!"
*********/

function chuckPushUps(string) {
  if (typeof string === 'string' && string.length>0){
    let largestCount = 0
    let counts = string.split(" ")
    counts.forEach((item, index) => {
      let stringNowArray = item.split('')
      stringNowArray = stringNowArray.filter(letter => letter ==="1" || letter === "0")
      let newString = stringNowArray.join('')
      if(largestCount < parseInt(newString , 2)){
      largestCount = parseInt(newString , 2)
      }
    })


    if (largestCount===0){
      return 'CHUCK SMASH!!'
    }
    return largestCount
  }
  return "FAIL!!"
}
