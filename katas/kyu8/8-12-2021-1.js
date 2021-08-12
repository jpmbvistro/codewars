// Codewars: Is it a palindrome?
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
const isPalindrome = word => word.toLowerCase() === [...word.toLowerCase()].reverse().join('')
