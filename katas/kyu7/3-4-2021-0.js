/*******************
Codewars
Number w/ 3 Roots
https://www.codewars.com/kata/5932c94f6aa4d1d786000028
*******************/


function perfectRoots(n){
  return !((n**(1/2))%1) && !((n**(1/4))%1) && !((n**(1/8))%1)
}
