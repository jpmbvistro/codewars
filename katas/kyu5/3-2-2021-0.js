/**************
codewars
https://www.codewars.com/kata/52685f7382004e774f0001f7/
Human Readable Time
**************/

function humanReadable(seconds) {
  let time = []

  for(let i = 2  ; i >=0 ; i--){
    let takenTime = Math.floor(seconds/(60**i))
    time.push((takenTime+'').padStart(2, '0'))
    seconds -= takenTime*60**i
  }
  return `${time[0]}:${time[1]}:${time[2]}`
}
