// Code your solutions in this file
function  printBadges(array){
  for (let i = 0;i < array.length;i ++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
return array;
}

function flip(){
  return Math.round(Math.random())
}

function tailsNeverFails(){
  let count = 0
  while (flip() !== 0) {
    count = ++count
  }
  return `You got ${count} tails in a row!`
}
