/*******************************************************
=======================Codewars=========================
Count the Digit
https://www.codewars.com/kata/566fc12495810954b1000030
********************************************************/
function nbDig(n, d) {
    let count = 0
    for(let i=0 ; i <=n ;i++){
      count += `${i*i}`.replace(new RegExp(`[^${d}]`,'g'),'').length
    }
    return count
}
