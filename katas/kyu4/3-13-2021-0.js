/*********
Codewars
Human Readable Duration Format
https://www.codewars.com/kata/52742f58faf5485cae000b9a
Note: Solution requires strict parameter that there are exactly 365 days in a year (no remainders in seconds). Meaning the answer expects a year to have 31536000 seconds instead of the precise 31556926 seconds
********/

function formatDuration (seconds) {
  console.log(seconds)
  if (seconds===0){return 'now'}
  else{
    let answer =''
    let years = Math.floor(seconds/31536000)
    seconds = seconds%31536000
    let days = Math.floor(seconds/86400)
    seconds = seconds%86400
    let hours = Math.floor(seconds/3600)
    seconds = seconds%3600
    let minutes = Math.floor(seconds/60)
    seconds = seconds%60
    let time = [{year: years}, {day: days}, {hour: hours}, {minute: minutes}, {second: seconds}]
//     console.log(time)
//     console.log(Object.keys(time))
//     console.log(time[0][Object.keys(time[0])])
    time = time.filter((item, i) => item[Object.keys(time[i])] !=0)
//     console.log(time)
    answer = `${time[time.length-1][Object.keys(time[time.length-1])]} ${Object.keys(time[time.length-1])}`
    if (time[time.length-1][Object.keys(time[time.length-1])]>1){answer+='s'}
    if(time.length>1){
     let stringPenultimate = `${time[time.length-2][Object.keys(time[time.length-2])]} ${Object.keys(time[time.length-2])}`
     if (time[time.length-2][Object.keys(time[time.length-2])]>1){stringPenultimate+='s'}
     answer = `${stringPenultimate} and ${answer}`
     for(let j = time.length-3; j>=0 ;j--){
       let nextAnswer = `${time[j][Object.keys(time[j])]} ${Object.keys(time[j])}`
       if (time[j][Object.keys(time[j])]>1){nextAnswer+='s'}
       nextAnswer+=', '
       answer = nextAnswer + answer
     }
    }
    return answer
  }
}
