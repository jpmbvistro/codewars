/*******************************************************
=======================Codewars=========================
Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
https://www.codewars.com/kata/5829ca646d02cd1a65000284
********************************************************/
function isAgeDiverse(list) {
  let ageGroupAttendance = Array.from(new Set(list.map(item=>Math.floor(item.age/10)))).sort((a,b)=>a-b).filter(item=>item>0)
  let stillDiverse = true
  for(let i = 0 ; i < 9 ; i++){
    stillDiverse = stillDiverse && ageGroupAttendance[i] === i+1
  }
  return ageGroupAttendance[9]>=10 && stillDiverse
}
