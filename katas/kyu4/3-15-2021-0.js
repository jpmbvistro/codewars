/*******************************************************
=======================Codewars=========================
Range Extraction
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/
Note: Start with 385
********************************************************/

function solution(list){
 let solString =''
 if (list.length > 0){
   if(list.length > 1){
     let temp =[list[0]]
     for (let i = 1 ; i < list.length ;i++) {
       if (list[i]!==list[i-1]+1){
         if(temp.length >=3) {
           solString += `,${temp[0]}-${temp[temp.length-1]}`
         } else {
           temp.forEach(item => solString += `,${item}`)
         }
         temp=[]
       }
       temp.push(list[i])
     }
     if(temp.length >=3) {
           solString += `,${temp[0]}-${temp[temp.length-1]}`
     } else {
       temp.forEach(item => solString += `,${item}`)
     }
     solString = solString.substr(1)
   } else{
     solString += list[0]
   }
 }
  return solString
}
