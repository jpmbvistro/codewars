/*******************************************************
=======================Codewars=========================
Smallest unused ID 
https://www.codewars.com/kata/55eea63119278d571d00006a/
********************************************************/
function nextId(ids){
  ids = Array.from(new Set(ids))
  ids.sort((a,b)=>a-b)
  for( i=0; i<ids.length ; i++){
    if (ids[i] != i) return i
  }
  return ids.length
}
