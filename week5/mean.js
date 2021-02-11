function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  return Math.floor(marks.reduce ((accumulator, currentValue) => accumulator + currentValue)/marks.length)
}

/*
Get the mean of an array
https://www.codewars.com/kata/563e320cee5dddcf77000158
*/
