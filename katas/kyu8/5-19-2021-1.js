/*******************************************************
=======================Codewars=========================
Twice as old
https://www.codewars.com/kata/5b853229cfde412a470000d0
********************************************************/
function twiceAsOld(dad, son) {
  let doubleAge = 0
  let dadPlus = dad
  let dadMinus = dad
  while(dadPlus !== son*2 && dadMinus !== son*2){
    dadMinus--
    dadPlus++
    doubleAge++
  }
  return doubleAge

}
