/*******************************************************
=======================Codewars=========================
Strip Comments
https://www.codewars.com/kata/51c8e37cee245da6b40000bd
 
********************************************************/

function solution(input, markers) {
  let lines = input.split('\n')
  let answer = ''
  lines.forEach((item, i) => {
    let markIndex = -1
    markers.forEach(mark => {
      if(item.includes(mark) && item.indexOf(mark) >= 0 && (item.indexOf(mark) < markIndex || markIndex===-1) ){
        markIndex = item.indexOf(mark)
      }

    })
    answer = markIndex >= 0  ? answer + item.substring(0,markIndex).trim() : answer + item
    if (lines.length > 1 && i !== lines.length-1){
      answer += "\n"
    }
  })
  return answer
};
