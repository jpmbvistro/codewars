/**************
codewars
https://www.codewars.com/kata/55cbd4ba903825f7970000f5
Gradebook
**************/

function getGrade (s1, s2, s3) {
  let avgScore  = (s1+ s2 + s3)/3
//   console.log(avgScore)
  let grades = ['D', 'C', 'B', 'A']
  let grade = 'F'

  for (i = 0 ; i < grades.length ; i++) {
    if (i*10 + 60 <= avgScore){
      grade = grades[i]
    }
  }
  return grade
}
