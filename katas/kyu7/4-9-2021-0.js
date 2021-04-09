/*******************************************************
=======================Codewars=========================
List Filtering
https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/
********************************************************/
function filter_list(l) {
  return l.filter(item=>/([0-9])/.test(item)&&typeof item ==='number')
}
