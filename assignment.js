//Problem 1
function feetToMile(foot) {
  let mile = foot / 5280;
  return mile;
}
let resultFeetToMile = feetToMile(11234).toFixed(3);
console.log(resultFeetToMile);

//Problem 2
function woodCalculator(chair, table, bed) {
  if (chair < 1 || table < 1 || bed < 1) {
    return "Please Come Again Later.";
  }
  let chairWood = chair * 1;
  let tableWood = table * 3;
  let bedWood = bed * 5;
  let total = chairWood + tableWood + bedWood;
  return total;
}
let result = woodCalculator(2, 3, 4);
console.log(result + " Cft");

//Problem 3
function brickCalculator(floor) {
  let brickForTen = 0;
  let brickForTwenty = 0;
  let brickForAvobeTwenty = 0;
  if (floor < 1) {
    return "We are not working with basement!";
  }
  if ((floor >= 1 && floor <= 10) || floor > 10) {
    if (floor > 10) {
      brickForTen = 10 * 15 * 1000;
    } else {
      brickForTen = floor * 15 * 1000;
    }
  }
  if ((floor > 10 && floor <= 20) || floor > 20) {
    if (floor > 20) {
      brickForTwenty = 10 * 12 * 1000;
    } else {
      brickForTwenty = (floor - 10) * 12 * 1000;
    }
  }
  if (floor > 20) {
    brickForAvobeTwenty = (floor - 20) * 10 * 1000;
  }
  let total = brickForTen + brickForTwenty + brickForAvobeTwenty;
  return total;
}
let totalBrickNeeded = brickCalculator(15);
console.log(totalBrickNeeded);

//Problem 4
function tinyFriend(names){
    let tiny = names[0];
    if(names.length == 0){
        return;
    }
    for(let i = 1;i<names.length; i++){
        if(names[i].length < tiny.length){
            tiny = names[i];
        }
    }
    return tiny;
}
let friend = ["Mahmud","Ikramul","Hasan","Mili","Sagar"];
console.log(tinyFriend(friend));