/*******************************************************
=======================Codewars=========================
Count of positives / sum of negatives
https://www.codewars.com/kata/576bb71bbbcf0951d5000044
********************************************************/
function countPositivesSumNegatives(input) {
    if(input===null || input.length===0) return []
    let posCount = input.filter(item=>item>0).length
    let negSum = input.filter(item=>item<0).reduce((acc,curr)=>acc+curr)
    return [posCount, negSum]
}
