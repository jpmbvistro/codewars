/*******************************************************
=======================Codewars=========================
UEFA EURO 2016
https://www.codewars.com/kata/57613fb1033d766171000d60/
********************************************************/
const uefaEuro2016 = (teams, scores) => `At match ${teams[0]} - ${teams[1]}, ${scores[0]>scores[1] ? teams[0]+' won!' : scores[1] > scores[0] ? teams[1]+' won!' : 'teams played draw.' }`
