/*******************************************************
=======================Codewars=========================
Positions Average
https://www.codewars.com/kata/59f4a0acbee84576800000af/
********************************************************/
function posAverage(...s) {
    let commonPositions = 0
    let totalPositions = 0
    s = s[0].split(', ')
    let stringLength = s[0].length
    s.forEach((item,position)=>{
      for(let i = position+1 ; i<s.length ; i++){
        for(let j = 0 ; j < stringLength ; j++){
          if(s[position][j]===s[i][j]) commonPositions++
          totalPositions++
        }
      }
    })
    return commonPositions/totalPositions*100
}
