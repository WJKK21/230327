const month = (new Date()).getMonth() + 1

// 봄
if (3 <= month && month <= 5) {
 alert ('봄')
}
//여름
if (6 <= month  && month <= 8) {
 alert ('여름')
  
}
//가을 
if (9 <= month && month <= 11) {
 alert ('가을')
  
}
//겨울
if ((1 <= month && month <= 2) || (month === 12)){
 alert ('겨울')
  
}