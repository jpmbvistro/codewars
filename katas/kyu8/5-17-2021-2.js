/*******************************************************
=======================Codewars=========================
Geometry Basics: Distance between points in 2D
https://www.codewars.com/kata/58dced7b702b805b200000be
********************************************************/
function distanceBetweenPoints(a, b) {
  return Math.sqrt( (Math.abs(a.x-b.x))**2 + (Math.abs(a.y-b.y))**2 )
}
