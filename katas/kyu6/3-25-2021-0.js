/*******************************************************
=======================Codewars=========================
Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
https://www.codewars.com/kata/58291fea7ff3f640980000f9/
Great series to practice HOF
********************************************************/
function allContinents(list) {
  let continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  list.forEach((item, i)=>{
    continents = continents.filter(cont=>cont!==item.continent)
  })
  return continents.length===0
}
