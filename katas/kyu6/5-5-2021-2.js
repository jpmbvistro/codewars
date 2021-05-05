/*******************************************************
=======================Codewars=========================
Chess Fun #1: Chess Board Cell Color
https://www.codewars.com/kata/5894134c8afa3618c9000146
********************************************************/
function chessBoardCellColor(cell1, cell2) {
  //coding and coding..
  let letterKey = {A:1,B:0,C:1,D:0,E:1,F:0,G:1,H:0,}
  cell1 = cell1.split('')
  cell2 = cell2.split('')
  return (letterKey[cell1[0]] + Number(cell1[1]))%2 === (letterKey[cell2[0]] + Number(cell2[1]))%2
}
