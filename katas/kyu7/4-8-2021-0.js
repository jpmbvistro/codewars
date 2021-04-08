/*******************************************************
=======================Codewars=========================
Paul's Misery
https://www.codewars.com/kata/57ee31c5e77282c24d000024/
********************************************************/
function paul(x){
  let key = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
  let sol = 0
  x.forEach(item=>{
    sol += key[item]
  })
  if(sol<40) return 'Super happy!'
  else if(sol<70) return 'Happy!'
  else if(sol<100) return 'Sad!'
  else return 'Miserable!'
}
