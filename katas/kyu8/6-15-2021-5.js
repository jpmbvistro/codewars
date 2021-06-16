/*******************************************************
=======================Codewars=========================
I love you, a little , a lot, passionately ... not at all
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/
********************************************************/
function howMuchILoveYou(nbPetals) {
    let phrases = ['I love you',"a little","a lot","passionately",'madly',"not at all"]
    return phrases[(nbPetals-1)%6]
}
