/*******************************************************
=======================Codewars=========================
Turn String Input into Hash
https://www.codewars.com/kata/52180ce6f626d55cf8000071/
********************************************************/
function strToHash(str){
  if(str.length===0) return {}
  let arrayray = str.split(', ')
  let hash  = {}
  arrayray.forEach((item,i)=>{
    let itemray = item.split('=')
    hash[itemray[0]] = Number(itemray[1])
  })
  console.log(hash)
  return hash
}
