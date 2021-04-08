/*******************************************************
=======================Codewars=========================
Cat years, Dog years
https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/
********************************************************/
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0
  let dogYears = 0
  let hummusYears = humanYears
  console.log(hummusYears)
  if(hummusYears){
    hummusYears--
    catYears = dogYears = 15
  }
  if(hummusYears){
    hummusYears--
    catYears = dogYears += 9
  }
  return [humanYears,catYears +hummusYears*4,dogYears+hummusYears*5];
}
