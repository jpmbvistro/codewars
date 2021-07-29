/*******************************************************
=======================Codewars=========================
HTML dynamic color string generation
https://www.codewars.com/kata/56f1c6034d0c330e4a001059/
********************************************************/
const generateColor= _ => `#${Math.floor(Math.random()*16777216).toString(16).padStart(6,"0")}`
