/*******************************************************
=======================Codewars=========================
Sum of Intervals
https://www.codewars.com/kata/52b7ed099cdc285c300001cd/
Note: Start with 321 points @ 29.7% 5kyu
Originally made this way more complicated by trying to
combine all values between the intervals, removing
repeats, then parsing the values back into respective
intervals.
I then realized that since an interval is guaranteed a
length of one, that I can, starting from the second
value of the interval, check if the value has aready
been traversed and increment if it has not.
********************************************************/

function sumIntervals(intervals){
  let length = 0
  let traversedVals = []
  intervals.forEach((item, i) => {
    for(let i = item[0]+1 ; i <= item[1] ; i++){
      if(traversedVals.includes(i)===false){
        traversedVals.push(i)
        length++
      }
    }
  })
  return length
}
