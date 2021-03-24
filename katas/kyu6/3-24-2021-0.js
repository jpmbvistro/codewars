/*******************************************************
=======================Codewars=========================
Vowels Back
https://www.codewars.com/kata/57cfd92c05c1864df2001563/
********************************************************/
function vowelBack(s){
  let alpha = {a:'v',b:'k',c:'b',d:'a',e:'a',f:'f',g:'p',h:'q',i:'i',j:'s',k:'t',l:'u',m:'v',n:'w',o:'n',p:'y',q:'z',r:'a',s:'b',t:'t',u:'p',v:'v',w:'f',x:'g',y:'h',z:'i' }
  s = s.split('')
  let newArray = []
  s.forEach((item,i)=>{
    newArray.push(alpha[item])
  })
  return newArray.join('')

}
