/*******************************************************
=======================Codewars=========================
All Star Code Challenge #22
https://www.codewars.com/kata/5865cff66b5699883f0001aa
********************************************************/
function toTime(seconds) {
  return `${Math.floor(seconds/3600)} hour(s) and ${Math.floor(seconds%3600/60)} minute(s)`
}
