/*******************************************************
=======================Codewars=========================
(Ready for) Prime Time
https://www.codewars.com/kata/521ef596c106a935c0000519
********************************************************/
function prime(num) {
  let primes = []
  for(let i = 2 ; i <= num ; i++){
    if(primes.filter(j=>i%j !== 0).length >= primes.length) primes.push(i)
  }
  return primes
}
