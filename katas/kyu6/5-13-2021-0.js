/*******************************************************
=======================Codewars=========================
Break camelCase
https://www.codewars.com/kata/5208f99aee097e6552000148
********************************************************/
function solution(string) {
    return string.match(/([A-Z][a-z]*)|[a-z]{1,}/g).join(' ')
}
