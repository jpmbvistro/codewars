/*******************************************************
=======================Codewars=========================
Sum of positive
https://www.codewars.com/kata/5715eaedb436cf5606000381
********************************************************/
const positiveSum = arr => arr.reduce((acc,curr)=> curr > 0 ? acc+curr : acc , 0)
